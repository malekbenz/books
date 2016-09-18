var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var minifyCss = require("gulp-minify-css");


var paths = {
    scripts: {
        srcWatch: ['./src/app/**/*.js','./js/*.js'],
  
        src: ["./src/app/app.js", "./src/app/settings/*.js", "./src/app/services/*.js"
            , "./src/app/components/*.js", "./src/app/controllers/*.js", "./src/js/*.js" ],
        dest: "./dist/js/"
    },
    css: {
        srcWatch: ["./src/css/style.css"],
        src: ["./src/css/*.css"],
        dest: "./dist/css/"
    },
    images: 'client/img/**/*'
};

gulp.task("scripts", function () {
    return gulp.src(paths.scripts.src)
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('minify-css', function () {
	gulp.src(paths.css.src) // path to your file
	.pipe(minifyCss())
	.pipe(gulp.dest(paths.css.dest));
});
// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});
// Copy all static images
gulp.task('images', ['clean'], function () {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('build/img'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts.srcWatch, ['scripts']);
    gulp.watch(paths.css.srcWatch, ['minify-css']);
    console.log("gulp is watching your files ");
});

// The default task (called when you run `gulp` from cli)
// 'watch', 'images'
gulp.task('default', ['watch', 'scripts', 'minify-css']);
