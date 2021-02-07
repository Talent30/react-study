module.exports = (context) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { cssnano: context.env === 'production' ? { preset: 'default' } : false },
  },
});
