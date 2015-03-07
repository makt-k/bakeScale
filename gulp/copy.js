var gulp = require('gulp');

module.exports = function(){
  gulp.src('public/src/images/**')
      .pipe(gulp.dest('public/dist/images'));

  gulp.src('public/src/templates/**')
      .pipe(gulp.dest('public/dist/templates'));
};
