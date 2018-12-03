var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');

var buffer = require('gulp-buffer');

gulp.task('js-about', function () {

  var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
  var lazyLoad = gulp.src('node_modules/lazyloadxt/dist/jquery.lazyloadxt.js');
  var jQeasing = gulp.src('node_modules/jquery.easing/jquery.easing.js');
  var slickSlider = gulp.src('node_modules/slick-carousel/slick/slick.js');
  var siteScripts = gulp.src('_includes/js/site/**/*.js');
  var aboutScripts = gulp.src('_includes/js/about/**/*.js');

  return merge(
          jquery, 
          jQeasing, 
          lazyLoad, 
          slickSlider, 
          siteScripts, 
          aboutScripts)
      .pipe(buffer())
      .pipe(concat('about.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/scripts'));
});