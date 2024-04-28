const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@localization': path.resolve(__dirname, './src/localization'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@store': path.resolve(__dirname, './src/store'),
      '@store/slice': path.resolve(__dirname, './src/store/slice'),
      '@selectors': path.resolve(__dirname, './src/store/selectors'),
    },
  },
};
