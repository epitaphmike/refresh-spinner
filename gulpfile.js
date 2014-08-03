var gulp = require('gulp');

var sass = require('gulp-sass');

var paths = {
  styles: './sass/*.scss'
};

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('default', ['watch', 'sass']);