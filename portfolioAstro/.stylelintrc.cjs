module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html"],

  plugins: ["stylelint-scss"],

  rules: {
    "no-descending-specificity": null,
    "rule-empty-line-before": null
  },

  ignoreFiles: ["node_modules/**", "**/*.d.ts"],
};
