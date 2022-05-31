module.exports = {
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        disableHostCheck: true,
        port: 8009,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            '/design': {
                target: 'http://42.194.179.235:6880',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '/design': '',
                },
            },
            '/file': {
                target: 'http://42.194.179.235/',
                ws: false,
                changeOrigin: true,
            },
        },
    }
};
