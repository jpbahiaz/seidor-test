const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '../src/index.ts'),
	module: {
		rules: [
			{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		alias: {
			"@": path.join(__dirname, '../src') 
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template:	path.join(__dirname, '../public/index.html'),
		}),
	],
	output: {
		filename: 'seidor-test.js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/'
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'styled-components': 'styled',
		'react-router-dom': 'ReactRouterDOM',
		'react-redux': 'ReactRedux',
		'redux': 'Redux',
	}
}

