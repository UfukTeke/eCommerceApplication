'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const criticalCss = require('gulp-critical-css');
const { src, dest, watch } = require('gulp');

const jsFiles1 = ['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/swiper/swiper-bundle.min.js', 'assets/js/index.js'];
const jsFiles2 = ['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/swiper/swiper-bundle.min.js', 'assets/js/product-list.js'];
gulp.task('sass', () => {
    return gulp.src('assets/scss/app.scss').pipe(sass()).pipe(gulp.dest('assets/css'));
});
const bundleJsIndex = () => {
	return src(jsFiles1)
	.pipe(sourceMaps.init())
	.pipe(minifyJs())
	.pipe(concat('bundleIndex.js'))
	.pipe(sourceMaps.write())
	.pipe(dest('assets/minify/'));
}
const bundleJsPrList = () => {
	return src(jsFiles2)
	.pipe(sourceMaps.init())
	.pipe(minifyJs())
	.pipe(concat('bundlePr.js'))
	.pipe(sourceMaps.write())
	.pipe(dest('assets/minify/'));
}
const devWatch = () => {
	watch('assets/js/*.js', bundleJsIndex);
	watch('assets/js/*.js', bundleJsPrList);
}
exports.bundleJsIndex = bundleJsIndex;
exports.bundleJsPrList = bundleJsPrList;
exports.devWatch = devWatch;

gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css').pipe(cleanCSS()).pipe(gulp.dest('assets/css'));
});
gulp.task('autoprefixer', () => {
	gulp.src('assets/css/app.css').pipe(autoprefixer({
		cascade: false
	}))
	.pipe(gulp.dest('dist'))
});

gulp.task('criticalTask', () => {
    gulp.src('assets/css/app.css')
        .pipe(criticalCss())
        .pipe(gulp.dest('assets/css'))
});
gulp.task('watch', () => {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'))
});

gulp.task('all', gulp.series('sass', 'minify-css', "watch"))
gulp.task('default', gulp.series('all'))