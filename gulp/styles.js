var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

module.exports = function(){

    return sass('./public/src/scss/styles.scss', { compass: true })
      .pipe(gulp.dest('./public/dist/css'))
};
