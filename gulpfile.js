var gulp = require('gulp');

var server = require('./gulp/server');
var scripts = require('./gulp/scripts');
var styles = require('./gulp/styles');
var copy = require('./gulp/copy');
var markup = require('./gulp/markup');
var watch = require('./gulp/watch');
var clean = require('./gulp/clean');

gulp.task('server', server);
gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('copy', copy);
gulp.task('markup', markup);
gulp.task('watch', watch);
gulp.task('clean', clean);

gulp.task('default', ['server', 'scripts', 'copy', 'styles', 'markup', 'watch']);
