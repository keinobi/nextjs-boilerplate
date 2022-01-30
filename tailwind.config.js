module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/main.css'
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans JP"',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        '"Yu Mincho"',
        '"Hiragino Mincho ProN"',
        'ui-serif',
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
