var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-site', function () {
  return gulp.src(['_site/'], {
          read: false
      })
      .pipe(clean());
});

gulp.task('clean-js', function () {
  return gulp.src(['assets/scripts'], {
          read: false
      })
      .pipe(clean());
});