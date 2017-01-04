var gulp = require('gulp'),
    stylus = require('gulp-stylus');

gulp.task('styles', function() {
  return gulp.src('themes/lisa-theme/static/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('themes/lisa-theme/static/css/'));
});

gulp.task('default', ['styles', 'watch']);

gulp.task('watch', function() {
  gulp.watch('themes/lisa-theme/static/css/*.styl', ['styles'])
});
