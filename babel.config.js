const presets = [];
const plugins = [];

if (process.env.NODE_ENV === 'development') {
  presets.push(
    ['@babel/preset-react', { runtime: 'automatic', development: true }],
    ['@babel/preset-typescript'],
  ); 
} else if (process.env.NODE_ENV === 'production') {
  presets.push(
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript'],
  );
  plugins.push(['polyfill-corejs3', { method: 'usage-global' }]);
}

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return { presets, plugins };
};
