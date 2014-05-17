"use strict";
Object.defineProperties(exports, {
  checkFileWithESLint: {get: function() {
      return checkFileWithESLint;
    }},
  __esModule: {value: true}
});
var join = $traceurRuntime.assertObject(require("path")).join;
var eslint = $traceurRuntime.assertObject(require("eslint")).cli;
var confPath = join(__dirname, "..", "conf", "eslint.json");
function checkFileWithESLint(filePath) {
  eslint.execute({
    _: [filePath],
    config: confPath
  });
}
;
