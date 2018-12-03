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
  var instaFeed = request('https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js')
      .pipe(source('instaFeed.js'));
  var siteScripts = gulp.src('_includes/js/site/**/*.js');
  var homeScripts = gulp.src('_includes/js/home/**/*.js');
  var behanceProjects = gulp.src('_includes/js/behanceProjects.js');

  return merge(
          jquery,
          jQeasing,
          lazyLoad,
          mustache,
          siteScripts,
          behanceProjects)
      .pipe(buffer())
      .pipe(concat('design.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/scripts'));
});