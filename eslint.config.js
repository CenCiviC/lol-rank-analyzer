import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
      import: importPlugin,
      prettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsx: true,
        useJSXTextNode: true,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Prettier 관련 규칙
      'prettier/prettier': 'error',

      // 일반적인 JavaScript/TypeScript 규칙
      'no-implicit-coercion': 'error',
      'no-undef': 'off', // TypeScript가 처리하므로 비활성화
      indent: 'off', // Prettier가 처리
      semi: 'off', // Prettier가 처리
      'no-extra-boolean-cast': 'off',
      'getter-return': 'warn',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'util',
              importNames: ['isArray'],
              message: '`Array.isArray`를 대신 사용해주세요!',
            },
          ],
        },
      ],
      'no-async-promise-executor': 'warn',
      'no-warning-comments': [
        'warn',
        {
          terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
          location: 'anywhere',
        },
      ],
      'prefer-const': 'error',
      'no-var': 'error',
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'import/no-duplicates': 'error',

      // TypeScript 관련 규칙
      '@typescript-eslint/indent': 'off', // Prettier가 처리
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
          leadingUnderscore: 'allow',
        },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface' },
        { format: ['PascalCase'], selector: 'typeAlias' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'private-static-field',
            'public-instance-field',
            'private-instance-field',
            'public-constructor',
            'private-constructor',
            'public-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/no-var-requires': 'warn',

      // React 관련 규칙
      'react/prop-types': 'off', // TypeScript를 사용하므로 비활성화
      'react/display-name': 'off',
      'react/jsx-no-target-blank': 'error',
      'react/react-in-jsx-scope': 'off', // React 17+에서는 불필요
    },
  },
])
