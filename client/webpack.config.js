const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {test: /\.jsx$/, loader:'babel-loader'},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'css-loader!style-loader'}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};