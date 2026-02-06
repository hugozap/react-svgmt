module.exports = {
    presets: [
      ["@babel/preset-env", {
        "targets": {
          "browsers": ["last 2 versions", "not dead"]
        }
      }],
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  };
    