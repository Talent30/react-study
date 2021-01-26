module.exports = (ctx) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { cssnano: ctx.env === 'production' ? { preset: 'default' } : false },
  },
});
