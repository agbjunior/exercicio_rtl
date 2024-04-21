import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

const eslintConfig = {
  plugins: ['prettier'],
  extends: [
    'prettier',
  ],
};


export default eslintConfig;

