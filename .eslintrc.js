module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    // "eslint:recommended",
    "plugin:prettier-vue/recommended",
    "prettier/vue"
    // "@vue/prettier"
  ],
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-v-html": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
