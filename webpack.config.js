const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)/,
                loader: 'ts-loader'
            }
        ]
    }
}