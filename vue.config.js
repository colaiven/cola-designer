module.exports = {
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        port: 8009,
        client: {
            overlay: false // 编译错误时，取消全屏覆盖（建议关掉）
        },
        proxy: {
            '/design/': {
                target: 'http://127.0.0.1:6882',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '/design': '',
                },
            },
            '/file': {
                target: 'http://127.0.0.1/',
                ws: false,
                changeOrigin: true,
            },
        },
    }
};
