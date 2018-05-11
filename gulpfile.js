var gulp = require('gulp');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');

var buffer = require('gulp-buffer');

gulp.task('clean', function () {
    return gulp.src(['_site/'], {read: false})
        .pipe(clean());
});


gulp.task('js', function() {

    var jquery = request('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js') 
      .pipe(source('jquery.js'));

    var lazyLoad = request('https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.1.0/jquery.lazyloadxt.min.js') 
    .pipe(source('lazyLoad.js'));   

    var jQeasing = request('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js') 
      .pipe(source('jQeasing.js'));

    var slickSlider = request('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js') 
    .pipe(source('slickSlider.js'));

    var myScripts =  gulp.src('_includes/js/**/*.js');                                 
  
    return merge(jquery,jQeasing, lazyLoad, slickSlider,myScripts)                                      
      .pipe(buffer())                                               
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/js/'));
});


gulp.task('jekyll', shell.task(['bundle exec jekyll build --config "_config.yml,_config.dev.yml"']));

gulp.task('jekyll-rebuild', ['jekyll'], function () {
    browserSync.reload();
});

gulp.task('serve', function () {
    browserSync.init({
        logConnections: true,
        https: true,
        server: {
            baseDir: '_site/',
            
        }
    });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
    gulp.watch(['./_includes/js/*.js'],['js']);
    gulp.watch([
        '_config.yml',
        '_config.dev.yml',
        './**/**/**/*.html',
        './**/**/*.md',
        './assets/js/scripts.js',
        './**/**/*.scss',
        '!./_site/', 
    ],
    ['jekyll-rebuild']);
});

gulp.task('default', 
    [
        'clean',
        'js',
        'jekyll', 
        'serve'
    ]
);