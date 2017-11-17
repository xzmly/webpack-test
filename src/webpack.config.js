var webpack = require('webpack')
var path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('../css/min1.css');
const extractLESS = new ExtractTextPlugin('../css/min2.css');
const extractSASS = new ExtractTextPlugin('../css/min3.css');


module.exports = { 
	//配置入口文件和输出文件
  entry: path.join(__dirname,"js/app/app.js"),
	output:{
		path: path.join(__dirname,"../public/js"),
		filename: "bunind.js"
	},

	//                       分离css和less和sass
	//extract-text-webpack-plugin
	plugins: [
    	extractCSS,
    	extractLESS,
    	extractSASS,
 	 ],
	module: {
		//css引入
     rules: [
       {
     	test:/\.css$/,
     	use: extractCSS.extract([ 'css-loader', 'autoprefixer-loader' ]) 
       },
       //less 引入
       {
         test: /\.less$/,   
         use: extractLESS.extract([ 'css-loader', 'less-loader' ])
       },
       {
         test: /\.scss$/,   
         use: extractSASS.extract([ 'css-loader', 'sass-loader' ])
       }
     ]
   },
   //                         合并css
	// module: {
	// 	//css引入
 //     rules: [
 //       {
 //     	test:/\.css$/,
 //     	use: ['style-loader','css-loader','autoprefixer-loader']  
 //       },
 //       //less 引入
 //       {
 //         test: /\.less$/,   
 //         use: ['style-loader','css-loader',"less-loader",'autoprefixer-loader']  
 //       },
 //       // sass引入
 //       {
 //         test: /\.scss$/,   
 //         use: ['style-loader','css-loader',"sass-loader",'autoprefixer-loader']  
 //       },
       
 //     ]
 //   }
   //压缩代码 或者 webpack -p
   // plugins: [
   //      new webpack.optimize.UglifyJsPlugin({
	  //     compress: {
	  //       warnings: false
	  //     }
	  //   })
   //  ]
};