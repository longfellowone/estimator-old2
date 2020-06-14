module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // "plugin:prettier/recommended",
    // "prettier/vue",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier",
    "prettier/vue",
  ],
  rules: {
    // "prettier/prettier": [
    //   "error",
    //   {
    //     endOfLine: "auto",
    //   },
    // ],
    // "vue/singleline-html-element-content-newline": "off",
  },
};
