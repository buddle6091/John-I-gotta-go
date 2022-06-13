// vue.config.js
const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? 'index.html'
    : '/',
    outputDir: path.resolve(__dirname, "./dist/"),
    assetsDir: "./assets/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "./src/UI/scss/_variable.scss";
                @import "@/UI/scss/_mixins.scss";
                `
            }
        }
    },
    configureWebpack: {
        entry: "./src/main.ts",
        /* 밖에다 해야 인식됨 */
        /* output: {
            path: path.resolve(__dirname, "./dist"),
            publicPath: '/dist/',
        } */
        /* module: {
            rules: [
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // css -> js 변환
              },
              {
                test: /\.vue$/,
                use: ["vue-loader"],  // vue -> js 변환
              },
              {
                test: /\.js$/,
                use: ["babel-loader"],  // ES6문법 -> 호환가능한 js 변환
                exclude: /node_modules/
              },
              {
                test: /\.(png|jpg|gif|svg)$/,
                use: ["file-loader"],  // 이미지파일 -> js파일로 변환
                options:{
                    name: '[name].[ext]?[hash]'
                }
              },
            ],
          }, */
    },
    devServer:{
        proxy: {
            '/' : {
                 "target": 'http://apis.data.go.kr',
                 "pathRewrite": {'^/': ''},
                 "changeOrigin": true,
                 "secure": false 
             }  
        }
    },
}