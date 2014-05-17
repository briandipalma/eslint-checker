/** @module eslint-checker/src/index */

import {join} from "path";
import {cli as eslint} from "eslint";

var confPath = join(__dirname, "..", "conf", "eslint.json");

/**
 * @alias module:eslint-checker/src/index
 * @param {string} filePath
 */
export function checkFileWithESLint(filePath) {
	eslint.execute({
		_: [filePath],
		config: confPath
	});
};