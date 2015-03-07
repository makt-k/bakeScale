var gulp = require('gulp');
var refresh = require('gulp-livereload');
var _ = require('underscore');

// Watch
module.exports = function () {

  var watch = {};

  watch.html = gulp.watch('public/src/*.html', ['markup']);
  watch.templates = gulp.watch('public/src/partials/**/*.html', ['templateCache']);
  watch.markdown = gulp.watch('*.md', ['markdown']);
  watch.styles = gulp.watch('public/src/scss/**/*.scss', ['styles']);
  watch.scripts = gulp.watch('public/src/**/*', ['scripts']);
  watch.images = gulp.watch('public/src/img/*', ['images']);
  watch.static = gulp.watch(['public/src/views/*', 'public/src/rest/**/*'], ['copy']);
  watch.locales = gulp.watch(['public/src/locales/*'], ['copy']);

  _(watch).each(function( v, k ){

    watch[ k ].on('change', function(){
      refresh(global.lrserver);
    });

  });

};
