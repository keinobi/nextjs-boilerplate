module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 1,
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'nesting-rules': false
      }
    }
  }
}
