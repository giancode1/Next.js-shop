module.exports = {
  env: {
    browser: true, // browser global variables
    amd: true, // require.js
    node: true, // node.js global variables
    es6: true, // es6
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    semi: ['error', 'always'],
  },
};
