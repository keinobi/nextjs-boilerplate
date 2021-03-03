module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'nesting-rules': true
      }
    }
  }
}
