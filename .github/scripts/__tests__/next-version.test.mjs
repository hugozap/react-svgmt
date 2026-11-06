import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

const scriptUrl = new URL('../next-version.mjs', import.meta.url).href;
const cases = [
  ['local version ahead of npm', '3.0.0', ['1.1.11'], 200, '3.0.1'],
  ['repeated publication', '3.0.0', ['3.0.0', '3.0.1'], 200, '3.0.2'],
  ['numeric patch order', '3.0.0', ['3.0.10', '3.0.9'], 200, '3.0.11'],
  ['newer published minor', '3.0.0', ['3.1.0', '3.0.99'], 200, '3.1.1'],
  ['ignore prereleases', '3.0.0', ['4.0.0-beta.1', '3.0.2'], 200, '3.0.3'],
  ['first publication', '3.0.0', [], 404, '3.0.1'],
  ['registry failure', '3.0.0', [], 503, null],
  ['invalid registry payload', '3.0.0', null, 200, null],
  ['reject local prerelease', '3.0.0-beta.1', [], 200, null],
];

for (const [name, version, versions, status, expected] of cases) {
  test(name, () => {
    const directory = mkdtempSync(join(tmpdir(), 'react-svgmt-version-'));

    try {
      writeFileSync(join(directory, 'package.json'), JSON.stringify({
        name: '@wedat/react-svgmt',
        version,
      }));

      const metadata = versions
        ? { versions: Object.fromEntries(versions.map(value => [value, {}])) }
        : {};
      const source = `
        globalThis.fetch = async () => ({
          ok: ${status === 200},
          status: ${status},
          json: async () => (${JSON.stringify(metadata)}),
        });

        await import(${JSON.stringify(scriptUrl)});
      `;
      const result = spawnSync(process.execPath, ['--input-type=module', '--eval', source], {
        cwd: directory,
        encoding: 'utf8',
      });

      assert.ifError(result.error);

      if (expected === null) {
        assert.notEqual(result.status, 0);
        assert.equal(result.stdout.trim(), '');
      } else {
        assert.equal(result.status, 0, result.stderr);
        assert.equal(result.stdout.trim(), expected);
      }
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
}
