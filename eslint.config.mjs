import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...{
          confetti: "readable",
          // puppeteer globals
          browser: "readonly",
          page: "readonly",
          context: "readonly",
        },
      },
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  { plugins: { prettier: eslintPluginPrettier } },
  { rules: { "prettier/prettier": "error" } },
  { ignores: ["stuff.js", "coverage"] },
];
