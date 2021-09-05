const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../**/**/*.stories.mdx', '../**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
  },
};
