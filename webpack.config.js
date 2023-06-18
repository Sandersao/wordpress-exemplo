const path = require('path');
const env = require('./server/env');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader", exclude: "/node_modules/" }
        ],
    },
    mode: env.environment
};