var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function (){
  gulp.task('clean', [], function() {
    gulp.src('./public/dist/**.*')
        .pipe(clean());
  });

};
