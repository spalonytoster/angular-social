var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    livereload = require('gulp-livereload');

gulp.task('css', function () {
  gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
    .pipe(livereload());
});

gulp.task('watch:css', ['css'], function () {
  livereload.listen();
  gulp.watch('css/**/*.styl', ['css']);
});
