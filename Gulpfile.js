var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('styles', function(){
    gulp.src(['css/style.less'])
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch(['css/*.less'], ['styles']);
});

gulp.task('default', ['styles', 'watch']);