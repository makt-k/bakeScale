var gulp = require('gulp');

// copy index.html

module.exports = function() {
  return gulp.src(['public/src/*.html'])
            .pipe(gulp.dest('public/dist'));
};
