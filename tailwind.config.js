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
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
