import { readFile } from 'node:fs/promises';

const { name, version } = JSON.parse(await readFile('package.json', 'utf8'));
const stableVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

if (!stableVersion.test(version)) {
  throw new Error('Automatic publication requires a stable package.json version (x.y.z).');
}

const response = await fetch(
  `https://registry.npmjs.org/${encodeURIComponent(name)}`,
  { signal: AbortSignal.timeout(30_000) }
);

let publishedVersions = [];

if (response.ok) {
  const metadata = await response.json();

  if (!metadata.versions || typeof metadata.versions !== 'object') {
    throw new Error('The npm registry response does not contain package versions.');
  }

  publishedVersions = Object.keys(metadata.versions);
} else if (response.status !== 404) {
  throw new Error(`Cannot read npm versions: HTTP ${response.status}.`);
}

let highest = version.split('.').map(Number);

for (const publishedVersion of publishedVersions) {
  if (!stableVersion.test(publishedVersion)) {
    continue;
  }

  const candidate = publishedVersion.split('.').map(Number);
  const differingPart = candidate.findIndex((part, index) => part !== highest[index]);

  if (differingPart !== -1 && candidate[differingPart] > highest[differingPart]) {
    highest = candidate;
  }
}

highest[2] += 1;

console.log(highest.join('.'));
