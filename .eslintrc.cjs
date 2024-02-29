module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off'
  },
  ignorePatterns: ['DeviceOrientationControls.js']
}
