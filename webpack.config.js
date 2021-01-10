const HtmlWebpackPlugin = require("html-webpack-plugin");
const VirtualModulesPlugin = require("webpack-virtual-modules");

const fs = require("fs");

const getApps = () => {
    return fs.readdirSync('./src/apps').map(appName => appName.replace(/\.js$/, ''));
}

const virtualModules = new VirtualModulesPlugin({
    'node_modules/app-info.js': `exports.apps = ${JSON.stringify(getApps())};`
})

module.exports = {
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin(), virtualModules]
}