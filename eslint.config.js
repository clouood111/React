import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    settings: {
      react: {
        version: 'detect',
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh
    }
  },
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      }, 
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off',
    }
  }
];