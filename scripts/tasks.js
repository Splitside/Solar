const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const LessAutoPrefix = require('less-plugin-autoprefix');
const minifyCss = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const imagemin = require("gulp-imagemin");
const pngquant = require('imagemin-pngquant');
const fileinclude = require('gulp-file-include');
const dependencies = require('gulp-web-dependencies');
const config = require('./config');

/**
 * Gulp task for running browser-sync
 */
gulp.task('browser-sync', () => {
    browserSync({
        server: {baseDir: path.join(__dirname, config.path.dest.root)},
        notify: false
    });
});

/**
 * Gulp task for processing *.less files
 */
gulp.task('less', () => {
    return gulp.src(path.join(__dirname, config.path.src.less))
        .pipe(less({
            paths: [
                path.join(__dirname, config.path.libs.bower)
            ],
            plugins: [
                new LessAutoPrefix({browsers: ['last 2 versions']})
            ]
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(path.join(__dirname, config.path.dest.css)))
        .pipe(browserSync.reload({stream: true}));
});

/**
 * Gulp task for processing *.js files
 */
gulp.task('js', function () {
    gulp.src(path.join(__dirname, config.path.src.js))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(__dirname, config.path.dest.js)))
        .pipe(browserSync.reload({stream: true}));
});

/**
 * Gulp task for processing images
 */
gulp.task('img', () => {
    return gulp.src(path.join(__dirname, config.path.src.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.join(__dirname, config.path.dest.img)))
        .pipe(browserSync.reload({stream: true}));
});

/**
 * Gulp task for processing *.js files
 */
gulp.task('html', () => {
    gulp.src(path.join(__dirname, config.path.src.html))
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(dependencies({
            dest: path.join(__dirname, config.path.dest.html),    // The basedir of your application. default: path.dirname(file.path)
            prefix: '/vendor'
        }))
        .pipe(gulp.dest(path.join(__dirname, config.path.dest.html)))
        .pipe(browserSync.reload({stream: true}));
});

/**
 * Gulp default task
 */
gulp.task('default', ['less', 'js', 'img', 'html']);

/**
 * Gulp task for starting watching files
 */
gulp.task('watch', ['browser-sync', 'less', 'js', 'img', 'html'], () => {
    gulp.watch(path.join(__dirname, config.path.src.lessWatch), ['less']);
    gulp.watch(path.join(__dirname, config.path.src.js), ['js']);
    gulp.watch(path.join(__dirname, config.path.src.img), ['img']);
    gulp.watch(path.join(__dirname, config.path.src.html), ['html']);
    gulp.watch(path.join(__dirname, config.path.src.templates), ['html']);
});
