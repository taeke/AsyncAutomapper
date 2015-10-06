/// <reference path='typings/tsd.d.ts' />
import * as GulpTypescript from 'gulp-typescript';
var gulp: gulp.Gulp = require('gulp');

gulp.task('compileSrc', () => {
    var tsResult = gulp.src('src/ts/**/*.ts')
        .pipe(GulpTypescript({
            noImplicitAny: true
         }));
    return tsResult.js.pipe(gulp.dest('./src/js/'));
});

gulp.task('watch', ['compileSrc'], () => {
   gulp.watch('src/ts/**/*.ts', ['compileSrc']); 
});

gulp.task('default', ['watch']);