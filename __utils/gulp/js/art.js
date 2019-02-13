var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');

var buffer = require('gulp-buffer');

gulp.task('js-art', function () {
    var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
    var lazyLoad = gulp.src('node_modules/lazyloadxt/dist/jquery.lazyloadxt.js');
    var jQeasing = gulp.src('node_modules/jquery.easing/jquery.easing.js');
    var instaFeed = request('https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js')
        .pipe(source('instaFeed.js'));
    var pageScroll = gulp.src('_includes/js/pageScroll.js');
    var navScript = gulp.src('_includes/components/containers/nav/nav.js');
    var InstaFeedscript = gulp.src('_includes/components/content/art/myInstaFeed.js');
    var gA = gulp.src('_includes/js/g-analytics.js');

return merge(
    instaFeed,
    jquery,
    jQeasing,
    lazyLoad,
    instaFeed,
    pageScroll,
    navScript,
    InstaFeedscript,
    gA)
    .pipe(buffer())
    .pipe(concat('art.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts'));
});