module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "prettier/vue",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    // "vue/singleline-html-element-content-newline": "off",
  },
};
