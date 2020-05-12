module.exports = {
    entry: ['@babel/polyfill' ,'./modulo-2-e-modulo-3/src/main.js'],
    output: {
        path: __dirname + '/modulo-2-e-modulo-3/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/modulo-2-e-modulo-3/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            }
        ]
    }
};