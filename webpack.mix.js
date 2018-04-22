let mix = require('laravel-mix');

mix.sass('./resources/assets/staradmin/scss/style.scss', 'public/css');
mix.js('./resources/assets/staradmin/js/staradmin', 'public/js');

mix.js('./resources/assets/vue/app', 'public/js');