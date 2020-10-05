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
        extensions: [ ".ts", ".js" ],
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
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
        ],
    },
};

const client = {
    target: "web",
    mode: "production",
    entry: {
        client: path.join(__dirname, "src", "client", "index.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "out"),
        filename: "[name].bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [ ".ts", ".js", ".tsx" ],
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
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    }
};

module.exports = [ server, client ];
