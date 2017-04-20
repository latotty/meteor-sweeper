'use strict';

const path = require('path');

module.exports = function(storybookBaseConfig, configType) {
  storybookBaseConfig.module.loaders.push({
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass'],
    include: path.resolve(__dirname, '../'),
  });
  storybookBaseConfig.module.loaders.push({
    test: /\.css$/,
    loaders: ['style', 'css'],
    include: path.resolve(__dirname, '../'),
  });
  storybookBaseConfig.module.loaders.push({
    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
    loader: 'file'
  });

  storybookBaseConfig.resolve.alias['meteor/meteor'] = path.resolve(__dirname, './mocks/meteor');

  return storybookBaseConfig;
};
