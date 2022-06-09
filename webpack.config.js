/* import */
const path = require('path')

/* export */
module.exports = {
    entry: {
        app: './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'public'), // __dirname = node js real directory
        filename: 'main.js',
        clean: true  // clean the output directory before emit.
    },

    module: {
        rules: [{
            test: /\.s?css$/,
            loader: 'vue-loader',
            use: [
                'style-loader',
                'scss-loader'
            ]
        }]
    },
    /* 번들링 후 결과물의 처리 방식 등 다양한 플러그인 설정 */
    plugins: [
        //new VueLoaderPlugin()
    ],
}
