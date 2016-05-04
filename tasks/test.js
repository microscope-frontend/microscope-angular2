var gulp = require('gulp');
var tslint = require("gulp-tslint");
 
gulp.task("lint", function(cb) {
    gulp.src("src/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report("prose", {
          emitError: false
        }));
        
    cb();
});