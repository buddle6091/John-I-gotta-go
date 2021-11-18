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
            '/api':{
                target:'http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList',
                changeOrigin:true,
                logLevel: 'debug',

            }
        }
    }
}