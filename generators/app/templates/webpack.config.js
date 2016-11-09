var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/WidgetName/widget/WidgetName.ts",
    output: {
        path: __dirname + "/dist/tmp",
        filename: "src/WidgetName/widget/WidgetName.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: "WidgetName.widget.WidgetName"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".json"]
    },
    errorDetails: true,
    module: {
        loaders: [
            { test: /\.ts?$/, loaders: ["ts-loader"] },
            { test: /\.json$/, loader: "json" }
        ]
    },
    devtool: "source-map",
    externals: ["mxui/widget/_WidgetBase", "dojo/_base/declare"],
    plugins: [
        new CopyWebpackPlugin([
            { from: "src/**/*.js" },
            { from: "src/**/*.xml" },
            { from: "src/**/*.css" }
        ], {
            copyUnmodified: true
        })
    ],
    watch: true
};