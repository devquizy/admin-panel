import globals from "globals";
import js from "@eslint/js";
import typescript from "typescript-eslint";
import react from "eslint-plugin-react";
import unicorn from "eslint-plugin-unicorn";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  js.configs.recommended,
  ...typescript.configs.recommended,
  react.configs.flat.recommended,
  unicorn.configs["flat/recommended"],
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "unicorn/no-null": "off",
    },
  },
];
