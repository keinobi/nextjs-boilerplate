module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ]
  },
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        'Verdana',
        '"Helvetica Neue"',
        '"Hiragino Sans"',
        '"Hiragino Kaku Gothic ProN"',
        '"Yu Gothic UI"',
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
