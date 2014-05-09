/** @module eslint-checker/src/index */

import {join} from "path";
import {cli as eslint} from "eslint";

/**
 * @alias module:eslint-checker/src/index
 * @param {string} filePath
 */
export function checkFileWithESLint(filePath) {
	eslint.execute({
		_: [filePath],
		config: join(__dirname, "..", "conf", "eslint.json")
	});
};