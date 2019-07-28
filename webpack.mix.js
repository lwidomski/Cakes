const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/views/cakes.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .react('resources/js/views/cake.js', 'public/js')
    .react('resources/js/views/new.js', 'public/js');
