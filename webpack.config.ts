const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: ["webpack/hot/poll?100", "./src/index.ts"],
	watch: true,
	target: "node",
	externals: [nodeExternals({ allowlist: ["webpack/hot/poll?100"] })],
	module: {
		rules: [
			{
				test: /.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	mode: "development",
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".json", ".config.ts", ".d.ts"],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "index.js",
	},
};
