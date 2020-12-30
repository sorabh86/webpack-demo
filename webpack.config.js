const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractkPlugin = require("mini-css-extract-plugin");

// console.log(process.env.NODE_ENV);//__dirname);
// entry: "./src/index.js",
// output: {
//     path : __dirname+'\\dist',
//     filename : "[name].bundle.js"
// },
    
module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename : "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize:false}
                    }
                ]

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {outputPath:'images'}
                    }
                ]

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    // "style-loader",
                    MiniCssExtractkPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ["index"]
        }),
        new MiniCssExtractkPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}
