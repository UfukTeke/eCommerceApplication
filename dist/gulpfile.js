'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');

gulp.task('sass', () => {
    return gulp.src('assets/scss/app.scss').pipe(sass()).pipe(gulp.dest('assets/css'));
});
gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css').pipe(cleanCSS()).pipe(gulp.dest('assets/css'));
});
gulp.task('compress', function() {
	gulp.src(['*.js', '*.mjs']).pipe(minify()).pipe(gulp.dest('dist'))
  });
gulp.task('autoprefixer', () => {
	gulp.src('assets/css/app.css').pipe(autoprefixer({
		cascade: false
	}))
	.pipe(gulp.dest('assets/css'))
});
gulp.task('watch', () => {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'))
});

gulp.task('all', gulp.series('sass', 'minify-css', 'compress', "watch"))
gulp.task('default', gulp.series('all'))