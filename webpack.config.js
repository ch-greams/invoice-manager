const path = require("path");

const server = {
    target: "node",
    mode: "production",
    entry: {
        server: path.join(__dirname, "src", "server", "index.ts"),
    },
    output: {
        path: path.resolve(__dirname, "out"),
        filename: "[name].bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts",".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },


};

module.exports = [ server ];
