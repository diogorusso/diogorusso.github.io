var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');

var buffer = require('gulp-buffer');

gulp.task('js-design', function () {
    var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
    var lazyLoad = gulp.src('node_modules/lazyloadxt/dist/jquery.lazyloadxt.js');
    var jQeasing = gulp.src('node_modules/jquery.easing/jquery.easing.js');
    var mustache = gulp.src('node_modules/mustache/mustache.js');
    var pageScroll = gulp.src('_includes/js/pageScroll.js');
    var navScript = gulp.src('_includes/components/containers/nav/nav.js');
    var behanceProjects = gulp.src('_includes/components/content/design/behanceProjects.js');
    var gA = gulp.src('_includes/js/g-analytics.js');

  return merge(
          jquery,
          jQeasing,
          lazyLoad,
          mustache,
          pageScroll,
          navScript,
          behanceProjects,
          gA)
      .pipe(buffer())
      .pipe(concat('design.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/scripts'));
});