module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    "no-console": "off",
  }
};
