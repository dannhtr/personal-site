const path = require('path');

module.exports = {
  distDir: 'build',
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  future: {
    webpack5: true,
  },
};
