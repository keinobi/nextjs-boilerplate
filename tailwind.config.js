const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  // darkMode: 'media',
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ]
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.emerald,
      blue: colors.blue,
      yellow: colors.amber
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Verdana',
        '"Helvetica Neue"',
        '"Hiragino Sans"',
        '"Hiragino Kaku Gothic ProN"',
        '"Yu Gothic UI"',
        '"Segoe UI"',
        'Meiryo',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        'ui-serif',
        '"Yu Mincho"',
        '"Hiragino Mincho ProN"',
        'serif'
      ]
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
