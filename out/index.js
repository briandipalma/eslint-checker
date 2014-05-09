"use strict";
var __moduleName = "./src/index";
var join = $traceurRuntime.assertObject(require("path")).join;
var eslint = $traceurRuntime.assertObject(require("eslint")).cli;
function checkFileWithESLint(filePath) {
  eslint.execute({
    _: [filePath],
    config: join(__dirname, "..", "conf", "eslint.json")
  });
}
;
module.exports = {
  get checkFileWithESLint() {
    return checkFileWithESLint;
  },
  __esModule: true
};
