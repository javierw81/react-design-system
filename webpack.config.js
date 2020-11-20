const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'jw-react-design-system',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    target: "web",

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                // use separate build config file, that disables generating declaration files for
                // .stories and .spec files
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                },
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            }
        ]
    },
    mode: 'development',
    plugins: [

    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'styled-components': path.resolve(__dirname, './node_modules/components'),
        }
    },
    externals: {
        'react': {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        'react-dom': {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "styled-components": {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
            root: "styled-components",
        },
    },
}