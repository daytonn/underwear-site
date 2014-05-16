var concat = require("gulp-concat");
var declare = require("gulp-declare");
var defineModule = require('gulp-define-module');
var ejs = require("gulp-ejs-precompiler");
var gulp = require("gulp");
var gulpif = require("gulp-if");
var gutil = require("gulp-util");
var handlebars = require('gulp-handlebars');
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

var ENV = process.env.ENV || 'development';

gulp.task('scss', function() {
  return gulp.src('scss/application.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('vendor', function() {
  return gulp.src([
    'vendor/jquery/dist/jquery.js'
  ])
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('build', ['scss', 'vendor']);

gulp.task('watch', ['build'], function() {
  gulp.watch('scss/**/*', ['scss']);
  gulp.watch('vendor/**/*', ['vendor']);
});

gulp.task('default', ['watch']);
