import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules"], // Ignore node_modules directory
  },
  {
    plugins: {
      jest, // Include the Jest plugin
    },
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.node, // Include Node.js globals (optional)
        ...globals.jest,
      },
        parserOptions: {
              ecmaVersion: 2018, // Use ECMAScript 2018 features
            },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules, // Use recommended rules for JavaScript
      ...jest.configs.recommended.rules, // Use recommended Jest rules
    },
  },
];
