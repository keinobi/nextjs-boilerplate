import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tailwindcss from 'eslint-plugin-tailwindcss'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
})

const eslintConfig = [
  ...neostandard({
    ts: true,
    ignores: resolveIgnoresFromGitignore()
  }),
  ...tailwindcss.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    settings: {
      tailwindcss: {
        config: 'tailwind.config.js',
        callees: ['classnames', 'clsx', 'cn', 'ctl', 'cva', 'tv']
      }
    }
  },
  {
    rules: {
      camelcase: ['error', { allow: ['^UNSAFE_'], properties: 'never', ignoreGlobals: true, ignoreImports: true }],

      'react/display-name': 'off',
      'react/jsx-handler-names': 'off',
      'react/self-closing-comp': 'off',

      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-unnecessary-arbitrary-value': 'off',

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
      }]
    }
  }
]

export default eslintConfig
