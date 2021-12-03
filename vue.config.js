module.exports = {
    publicPath: './',
    outputDir: "docs",
    devServer: {
        disableHostCheck: true,
        port: 8009,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/design': {
                target: 'http://127.0.0.1:6882',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '/design': ''
                }
            },
            '/fileUrl': {
                target: 'http://127.0.0.1:6882',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '/fileUrl': ''
                }
            },
        }
    },
}
