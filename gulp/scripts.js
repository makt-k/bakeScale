var gulp = require('gulp');
var browserify = require('browserify');
var exposify = require('exposify');
var transform = require('vinyl-transform');

module.exports = function () {

    exposify.config = {};

    var browserified = transform(function (filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./public/src/js/*.js'])
        .pipe(browserified)
        .pipe(gulp.dest('./public/dist/js'));
};
