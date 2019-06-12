const mix = require('laravel-mix');

mix.setPublicPath('dist');

mix.sass('src/sass/main.scss', 'dist/css/main.css')
	.js('src/js/stringfilter.js', 'dist/js/stringfilter.js')
	.js('src/js/normalizedstringfilter.js', 'dist/js/normalizedstringfilter.js')
	.js('src/js/lessernumberfilter.js', 'dist/js/lessernumberfilter.js')
	.js('src/js/greaternumberfilter.js', 'dist/js/greaternumberfilter.js')
	.js('src/js/numberrangefilter.js', 'dist/js/numberrangefilter.js')
	.js('src/js/sometypefilter.js', 'dist/js/sometypefilter.js')
	.js('src/js/everytypefilter.js', 'dist/js/everytypefilter.js')
	.js('src/js/complexfilter.js', 'dist/js/complexfilter.js')
	.copy('src/*.html', 'dist');
