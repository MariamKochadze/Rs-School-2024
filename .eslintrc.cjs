/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['!**/.server', '!**/.client', '.eslintrc.cjs'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint', 'import', 'prettier', 'react-compiler'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': 'off',
    'no-debugger': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    'max-lines-per-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    curly: ['error', 'all'],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['context'],
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-no-constructed-context-values': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'react-compiler/react-compiler': 'error',
    'react/static-property-placement': 'off',
    'react/no-unescaped-entities': 'off',
  },
  overrides: [
    {
      files: ['./app/entry.server.tsx'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
};
