const presets = [];
const plugins = [];

if (process.env.NODE_ENV === 'development') {
  presets.push(
    ['@babel/preset-react', { runtime: 'automatic', development: true }],
    ['@babel/preset-typescript'],
  );
} else if (process.env.NODE_ENV === 'production') {
  presets.push(
    [
      '@babel/preset-env',
      { useBuiltIns: 'entry', corejs: '3.9.1', bugfixes: true },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript'],
  );
  plugins.push(['@babel/plugin-transform-runtime']);
}

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return { presets, plugins };
};
