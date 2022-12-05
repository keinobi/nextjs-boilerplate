/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: [
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
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({ strategy: 'base' }),
    require('@tailwindcss/typography')
  ]
}
