import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1️⃣ Base JS rules + security checks
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      security: pluginSecurity
    },
    extends: [
      "js/recommended",
      "plugin:security/recommended"
    ]
  },

  // 2️⃣ Browser globals
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser
    }
  },

  // 3️⃣ React rules
  pluginReact.configs.flat.recommended,
]);
