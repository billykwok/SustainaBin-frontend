module.exports = {
  env: {
    commonjs: true,
    amd: true,
    es6: true,
    browser: true
  },
  plugins: ['babel', 'flowtype', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      allowImportExportEverywhere: true,
      jsx: true,
      experimentalObjectRestSpread: true
    },
    allowImportExportEverywhere: false
  },
  settings: {
    flowtype: { onlyFilesWithFlowAnnotation: true },
    'import/resolver': {
      webpack: { config: './webpack.dev.js' }
    }
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'max-len': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, arrow: false, assignment: false }
    ],
    indent: 'off',
    'no-console': 'off'
  }
};
