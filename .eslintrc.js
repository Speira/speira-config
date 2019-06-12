module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
