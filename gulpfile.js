const babel = require('gulp-babel');
const browserify = require('browserify');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');

gulp.task('source-js', function () {
    return gulp.src('./src/components/Genoa/Genoa.js')
        .pipe(concat('react-genoa-player.js'))
        .pipe(babel({
            plugins: ['transform-object-assign'],
            presets: ['es2015', 'react', 'stage-0']
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
    gulp.src(['./src/components/Genoa/*.scss'])
        .pipe(sass({
            includePaths: ['./src/components/Genoa/'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(
            "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
        .pipe(minifycss())
        .pipe(gulp.dest('./build'));
});

gulp.task('build', ['source-js', 'sass']);