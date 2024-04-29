const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@router': path.resolve(__dirname, './src/router'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@screens/*': path.resolve(__dirname, './src/screens/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@localization': path.resolve(__dirname, './src/localization'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@store': path.resolve(__dirname, './src/store'),
      '@store/slice': path.resolve(__dirname, './src/store/slice'),
      '@selectors': path.resolve(__dirname, './src/store/selectors'),
    },
  },
};
