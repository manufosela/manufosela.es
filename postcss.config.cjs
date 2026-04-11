const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    require('autoprefixer'),
    postcssNesting()
  ]
}
