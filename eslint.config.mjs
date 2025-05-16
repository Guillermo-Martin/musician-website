import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import chaiFriendly from "./types/eslint-plugin-chai-friendly";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["cypress/**/*.ts", "cypress/**/*.js"],
    plugins: {
      "chai-friendly": chaiFriendly,
    },
    rules: {
      "no-unused-expressions": "off", // disable base rule
      "chai-friendly/no-unused-expressions": "error", // enable chai-friendly rule
    },
  },
];

export default eslintConfig;
