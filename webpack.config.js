const HtmlWebpackPlugin = require("html-webpack-plugin");

// console.log(__dirname);
// entry: "./src/index.js",
// output: {
//     path : __dirname+'\\dist',
//     filename : "[name].bundle.js"
// },
    
module.exports = {
	mode: "development",
    output: {
        filename : "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize:false}
                    }
                ]

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {outputPath:'images'}
                    }
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
