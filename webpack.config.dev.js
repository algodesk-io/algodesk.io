const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 5000,
        contentBase: './website'
    },
 });