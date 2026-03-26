module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html'],

  plugins: ['stylelint-scss', 'stylelint-prettier'],

  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': null,
  },

  ignoreFiles: ['node_modules/**', '**/*.d.ts'],
};
