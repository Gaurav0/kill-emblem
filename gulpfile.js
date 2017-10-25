var gulp = require('gulp');
var emblemPrinter = require('gulp-emblem-printer');
var beautifyJson = require('./beautify');
var beautify = require('gulp-jsbeautifier');

gulp.task('templates', function() {
  return gulp.src('../labs/app/templates/**/*.emblem')
    .pipe(emblemPrinter({
      extension:'.hbs'
    }))
    .pipe(beautify(beautifyJson()))
    .pipe(gulp.dest('../labs/app/templates/'));
});
