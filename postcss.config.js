module.exports = {
  plugins: [
    require('cssnano')({
      autoprefixer: false,
      discardComments: { removeAll: true }
    }),
    require('autoprefixer')
  ]
}
