import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

	export default defineConfig([
  		{
    		files: ["**/*.js"],
    		languageOptions: {
      		ecmaVersion: "latest",
      		sourceType: "module",
      		globals: {
        		...globals.node
      		  }
    		},
    		rules: {
      			indent: ["error", 4],
      			quotes: ["error", "double"],
      			semi: ["error", "always"],
      			"linebreak-style": ["error", "windows"],
      			"no-console": "off"
    			}
  		},
  		js.configs.recommended
	]);
