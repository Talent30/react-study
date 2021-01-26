const presets = [];
const plugins = [];

if (process.env.NODE_ENV === 'development') {
  presets.push(
    ['@babel/preset-react', { runtime: 'automatic' }],
  );
} else if (process.env.NODE_ENV === 'production') {
  presets.push(
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: '3.8', bugfixes: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  );
  plugins.push(
    ['@babel/plugin-transform-runtime'],
  );
}

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return { presets, plugins };
};
