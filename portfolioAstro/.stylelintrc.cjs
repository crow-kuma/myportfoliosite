module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html"],

  plugins: ["stylelint-scss"],

  rules: {
    "no-descending-specificity": null,
  },

  ignoreFiles: ["node_modules/**", "**/*.d.ts"],
};
