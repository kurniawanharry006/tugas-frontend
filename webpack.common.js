const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist')
    },
    mode:'production',
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style.css'
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        
    ],
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/i,
                loader:'file-loader',
                options: {
                    name:'[name].[ext]'
                }
            }

        ]
    }
}