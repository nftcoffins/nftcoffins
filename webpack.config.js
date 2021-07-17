const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    entry: './client/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            favicon: './client/favicon.ico',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'client/images',
                    to: 'images',
                },
                {
                    from: 'client/site.webmanifest',
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    { loader: 'style-loader' }, // to inject the result into the DOM as a style block
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: isProduction ? '[hash:base64]' : '[local]-[hash:base64:5]',
                            },
                        },
                    }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    { loader: 'sass-loader' }, // to convert SASS to CSS
                    // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {},
    },
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'production'

        config.plugins.push(new MiniCssExtractPlugin())
    } else {
        config.mode = 'development'
    }
    return config
}
