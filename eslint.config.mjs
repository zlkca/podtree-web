import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser, ecmaVersion: 2021, sourceType: "module" }},
  {plugins: {react: pluginReact,
    'react-hooks': require('eslint-plugin-react-hooks'),
    'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    import: require('eslint-plugin-import')},
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {ignores: ["node_modules/*", "dist/*", "webpack.config.js"]},
  {settings: {react: { version: "detect" }}},
  {rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'import/no-unresolved': 'error',
  },}
];