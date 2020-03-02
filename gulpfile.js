const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const mincss = require('gulp-clean-css');
const rename = require("gulp-rename");

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("./*.html").on('change', browserSync.reload);
});
gulp.task('minify', function(done){
	gulp.src('./css/*.css')
		.pipe(mincss())
		.pipe(rename(function (path) {
			path.extname = ".min.css";
		}))
		.pipe(gulp.dest('./mincss/'));
	done();
});