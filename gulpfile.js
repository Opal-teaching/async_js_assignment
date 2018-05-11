var gulp = require("gulp");
var gulp_ngdocs = require("gulp-ngdocs");

gulp.task("docs",function(){
    return gulp.src(["C:/Users/Youngsun Jin/Desktop/async_js_assignment/src/*.js"])
        .pipe(gulp_ngdocs.process())
        .pipe(gulp.dest('C:/Users/Youngsun Jin/Desktop/async_js_assignment/docs'));
});

var jsdoc = require('gulp-jsdoc3');

gulp.task('node-docs', function (cb) {
    gulp.src(["C:/Users/Youngsun Jin/Desktop/async_js_assignment/src/*.js"], {read: false})
        .pipe(jsdoc(cb));
});