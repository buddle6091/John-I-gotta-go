// vue.config.js

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/styles/_variables.scss";
                @import "@.stlyes/_mixins.scss";
                `
            }
        }
    }
}