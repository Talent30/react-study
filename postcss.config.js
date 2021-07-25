module.exports = (context) => ({
  plugins: {
    autoprefixer: {},
    cssnano: {
      cssnano: context.env === 'production' ? { preset: 'default' } : false,
    },
  },
});
