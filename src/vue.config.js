// vue.config.js

module.exports = {
    publicPath: '/buddle6091.github.io',
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/styles/_variables.scss";
                @import "@.stlyes/_mixins.scss";
                `
            }
        }
    },
    devServer:{
        proxy: {
            '^/api':{
                "target":'http://localhost:8080',
                "changeOrigin":true,
                logLevel: 'debug',

            }
        }
    }
}