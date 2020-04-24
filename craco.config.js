const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "options",
          baseUrl: "./",
          aliases: {
            // "@file": "./src/file.js",
            "@views": "./src/views",
            "@lay": "./src/layouts",
            "@store": "./src/store",
            // you can alias packages too
            // "@material-ui": "./node_modules/@material-ui-ie10"
          }
        }
      }
    ]
  };