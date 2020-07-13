const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output:{ 
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        port: 4200
    },
    module: {
        rules:[{
            test:/\.css$/,
            use:[
                {loader: 'style-loader'},
                {loader:'css-loader'}
            ]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true,
                useShortDoctype:true
            }
        })
    ],
    devtool:'source-map'   
}