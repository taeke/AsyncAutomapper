/// <reference path='typings/tsd.d.ts' />
var GulpTypescript = require('gulp-typescript');
var gulp = require('gulp');
gulp.task('compileSrc', function () {
    var tsResult = gulp.src('src/ts/**/*.ts')
        .pipe(GulpTypescript({
        noImplicitAny: true
    }));
    return tsResult.js.pipe(gulp.dest('./src/js/'));
});
gulp.task('watch', ['compileSrc'], function () {
    gulp.watch('src/ts/**/*.ts', ['compileSrc']);
});
gulp.task('default', ['watch']);
