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
  var lazyScript = gulp.src('_includes/js/lazyLoad.js');
  var pageScroll = gulp.src('_includes/js/pageScroll.js');
  var navScript = gulp.src('_includes/components/containers/nav/nav.js');
  var typeFxScript = gulp.src('_includes/components/content/bio/typeFx.js');
  var slickScript = gulp.src('_includes/components/content/design/slick.js');
  var prototypeScript = gulp.src('_includes/components/content/prototypes/prototypes.js');
  var gA = gulp.src('_includes/js/g-analytics.js');

  return merge(
          jquery, 
          jQeasing, 
          lazyLoad, 
          slickSlider,
          navScript,
          pageScroll,
          lazyScript, 
          typeFxScript,
          slickScript,
          prototypeScript,
          gA)
      .pipe(buffer())
      .pipe(concat('about.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/scripts'));
});