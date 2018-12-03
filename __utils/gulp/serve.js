var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {
  browserSync.init({
      logConnections: true,
      port:1818,
      https: true,
      server: {
          baseDir: '_site/',

      }
  });
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
  gulp.watch(['./_includes/scripts.js'], ['js']);
  gulp.watch([
          '_config.yml',
          '_config.dev.yml',
          './**/**/**/*.html',
          './**/**/*.md',
          './assets/scripts/*.js',
          './**/**/*.scss',
          '!./_site/',
      ],
      ['jekyll-rebuild']);
});
