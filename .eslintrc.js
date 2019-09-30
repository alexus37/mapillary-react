module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    "react"
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'no-return-assign': 0,
    'operator-linebreak': ['error', 'after'],
    'implicit-arrow-linebreak': 0,
    'arrow-parens': 0,
    'prefer-destructuring': 0,
    'object-curly-newline' :0,
    'import/no-named-as-default': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-fragments' :0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': 0,
  },
};