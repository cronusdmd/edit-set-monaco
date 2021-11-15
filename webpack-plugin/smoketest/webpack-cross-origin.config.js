const MonacoWebpackPlugin = require('../out/index.js');
const path = require('path');

const ASSET_PATH = 'http://localhost:8088/monaco-editor-webpack-plugin/test/dist/';

const REPO_ROOT = path.join(__dirname, '../../');

module.exports = {
	mode: 'development',
	entry: './index.js',
	context: __dirname,
	output: {
		path: path.resolve(REPO_ROOT, 'test/smoke/webpack/out'),
		filename: 'app.js',
		publicPath: ASSET_PATH
	},
	resolve: {
		alias: {
			'monaco-editor': path.resolve(REPO_ROOT, 'release')
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new MonacoWebpackPlugin({
			monacoEditorPath: path.resolve(REPO_ROOT, 'release')
		})
	]
};
