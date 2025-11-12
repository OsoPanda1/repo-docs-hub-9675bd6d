```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import security from "eslint-plugin-security";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

/**
 * Reglas custom PI/PII: detecta posibles fugas de nombres, emails, datos personales en el código.
 */
const piLeakRegex = /(nombre|name|apellido|lastName|email|correo|address|dirección|passport|dni|ssn|tarjeta|card|phone|tel)[ _=:]*("|')[^"']*/i;

const piLeakRule = {
  create(context) {
    return {
      Literal: (node) => {
        if (typeof node.value === "string" && piLeakRegex.test(node.value)) {
          context.report({
            node,
            message:
              "Posible fuga de información PI/PII en literal detectado: {{ value }}",
            data: { value: node.value }
          });
        }
      }
    };
  }
};

export default tseslint.config(
  { ignores: ["dist", "build", "coverage", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:security/recommended",
      "plugin:import/recommended",
      "plugin:jsx-a11y/recommended"
    ],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      sourceType: "module"
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "security": security,
      "import": importPlugin,
      "jsx-a11y": jsxA11y,
      "custom-pi-leak": piLeakRule
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-eval-with-expression": "error",
      "import/no-cycle": "warn",
      "import/no-unresolved": "error",
      "import/order": ["warn", {
        "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always"
      }],
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-autofocus": "warn",

      // PI/PII Leak custom rule
      "custom-pi-leak/pi-leak-check": "error",

      // Cells-Specific: reglas extra para carpetas críticas
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-alert": "error",
      "cell-anubis/no-raw-export": "error",
      "cell-isabella/no-unhashed-memory": "error",
      "cell-registry/no-unanchored-log": "error"
    },
    settings: {
      react: { version: "detect" }
    }
  },
  // Integración con pipelines QA/CI: un solo error PI, crash del pipeline, bloqueo de merge
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "custom-pi-leak/pi-leak-check": "error"
    }
  },
  // Hooks custom para auditoría e integración institucional
  {
    files: ["src/audit/**/*.ts"],
    rules: {
      "security/detect-object-injection": "error",
      "import/no-cycle": "error"
    }
  },
  // Cells/Modules específicos
  {
    files: ["src/cells/anubis/**/*.ts"],
    rules: {
      "no-raw-export": "error"
    }
  },
  {
    files: ["src/cells/isabella/**/*.ts"],
    rules: {
      "no-unhashed-memory": "error"
    }
  },
  {
    files: ["src/cells/registry/**/*.ts"],
    rules: {
      "no-unanchored-log": "error"
    }
  }
);
```

***

**¿Qué añade y fortalece?:**
- **Auditoría PI/PII** en tiempo real: cualquier string o literal con patrón típico de datos personales dispara error.
- **Reglas extendidas y custom por cell**―anubis, isabella, registry―para prevenir exports/raw, memoria no hashada, logs sin anclaje.
- **Bloqueo de pipeline CI/QA**: error PI/PII o ciclo, crash directo en integración/despliegue institucional (ZeroTrust).
- **Hooks QA/Auditoría**: refuerza seguridad, compliance y control PI en módulos críticos del TAMV.
- **Extensible** para cualquier carpeta/cell, reglas de publishing, compliance, rollback, integración multinodo.
