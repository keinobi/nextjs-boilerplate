import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
})

const eslintConfig = [
  ...neostandard({
    ts: true,
    ignores: resolveIgnoresFromGitignore()
  }),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles/main.css'
      }
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/no-unregistered-classes': ['warn', {
        ignore: ['react-colorful--custom']
      }]
    }
  },
  {
    rules: {
      camelcase: ['error', { allow: ['^UNSAFE_'], properties: 'never', ignoreGlobals: true, ignoreImports: true }],

      'react/display-name': 'off',
      'react/jsx-handler-names': 'off',
      'react/self-closing-comp': 'off',

      '@next/next/no-img-element': 'off',

      '@stylistic/indent': ['error', 2, {
        ignoredNodes: ['ConditionalExpression'],
        SwitchCase: 1,
        offsetTernaryExpressions: true
      }],
      '@stylistic/jsx-sort-props': ['warn', {
        callbacksLast: true,
        shorthandLast: true,
        noSortAlphabetically: true,
        reservedFirst: ['key', 'ref']
      }],
      '@stylistic/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: ['return', 'multiline-expression', 'block-like', 'try', 'throw'] },
        { blankLine: 'any', prev: 'import', next: 'import' }
      ]
    }
  }
]

export default eslintConfig
