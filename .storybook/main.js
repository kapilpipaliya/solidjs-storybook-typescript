module.exports = {
  stories: ['../stories/**/*.stories.[jt]sx'],
  // addons: [
  // // '@storybook/preset-typescript',
  // // '@storybook/addon-actions', 
  // // '@storybook/addon-links',
  // // '@storybook/addon-knobs',
  // // '@storybook/addon-notes',
  // // '@storybook/addon-viewport',
  // // '@storybook/addon-storysource',
  // // '@storybook/addon-a11y'
  // ],
webpackFinal: async config => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    //options: {
      //presets: ["solid"],
    //},
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
},
};