// vue.config.js

module.exports = {
    publicPath: '/buddle6091.github.io',
   
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
        /* output: {
            path: this.publicPath.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: "build.js",
        } */
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
    }
}