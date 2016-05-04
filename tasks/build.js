var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var runSequence = require('run-sequence');

// build project
gulp.task('build', function (cb) {
    runSequence('clean', 'assets', 'templates', 'browserify', cb);
});

gulp.task('browserify', function (cb) {
	return browserify()
		.add('./src/main.ts')
		.plugin(tsify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./www'));
});

// watch files and run appropriate tasks
gulp.task('watch', function () {
    gulp.watch(['./assets/**'], ['assets']);
    gulp.watch(['./src/**/*.ts'], ['browserify']);
    gulp.watch(['./src/**/*.html'], ['templates']);
});

// assets tasks
gulp.task('assets', function () {
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./www'));
});

// templates tasks
gulp.task('templates', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./www/'));
});

// clean build folder task
gulp.task('clean', function (cb) {
    del(['./www/']).then(function () {
		cb();
    });
});