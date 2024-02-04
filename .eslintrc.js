module.exports = {
  extends: 'plugin:unicorn/recommended',
  ignorePatterns: [
    'dist/**/*.js',
    'src/static/design-system/js/seven-minute-tabs.js',
    '!.*.cjs',
    '!.*.js'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'unicorn/prefer-module': 0
  }
};
