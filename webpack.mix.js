const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const webpack = require("webpack");

mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
});

mix.js("resources/js/inertia.js", "public/js");
mix.js("resources/js/vue.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .disableSuccessNotifications()
    .sourceMaps();
