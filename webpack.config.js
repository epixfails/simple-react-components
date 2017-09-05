const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        publicPath: '/build/',
        filename: 'main.js'
    },
    module: {
      rules: [
        { test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['env', 'stage-0', 'react'],
            }
          }
        },
        { test: /\.svg$/,
          exclude: /node_modules/,
          use: {
            loader: "svg-url-loader",
            options: {},
          }
        }
      ]
    }
};
