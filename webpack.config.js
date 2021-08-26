const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.c?sa?s?s/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer:{
        static: path.join(__dirname, 'public')
    },
    devtool: 'eval-cheap-module-source-map'
};