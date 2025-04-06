import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'

export default {
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/app/globals.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ellipsis-font',
          '"Helvetica Neue"',
          'Arial',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"BIZ UDPGothic"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          'Times New Roman',
          '"Hiragino Mincho ProN"',
          '"BIZ UDPMincho"',
          'serif'
        ]
      }
    }
  },
  plugins: [
    heroui()
  ]
} satisfies Config
