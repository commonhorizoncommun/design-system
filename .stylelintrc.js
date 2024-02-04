module.exports = {
  extends: 'stylelint-config-recommended',
  ignoreFiles: ['dist/**/*.css', 'src/static/design-system/css/*.css'],
  rules: {
    'custom-property-pattern': undefined,
    'import-notation': 'string'
  }
};
