var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('js',function (callback) {
  runSequence(
      'clean-js',
      'js-about', 
      'js-design',
      'js-art',
      'js-work',
      'js-post',
      callback
  );
});