const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        login: './src/login.ts',
        register: './src/register.ts',
        dashboard: './src/dashboard.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            template: './src/register.html',
            filename: 'register.html',
            chunks: ['register'],
        }),
        new HtmlWebpackPlugin({
            template: './src/dashboard.html',
            filename: 'dashboard.html',
            chunks: ['dashboard'],
        }),
    ],
};
