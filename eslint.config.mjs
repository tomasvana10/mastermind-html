import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { sourceType: "commonjs" },
  },
  {
    files: ["js/**/*.js", "eslint.config.mjs"],
    languageOptions: { sourceType: "module" },
  },
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
          jestPuppeteer: "readonly",
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
