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
    'vendor/jquery/dist/jquery.js',
    'vendor/underscore/underscore.js',
    'vendor/backbone/backbone.js',
    'vendor/underwear-js/dist/underwear.js',
    'vendor/handlebars/handlebars.js'
  ])
    .pipe(concat('vendor-compiled.js').on('error', gutil.log))
    .pipe(gulpif(ENV === "production", uglify().on('error', gutil.log)))
    .pipe(gulp.dest('app'));
});

gulp.task('templates', function() {
  return gulp.src('app/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(defineModule('plain'))
    .pipe(declare({
      namespace: 'App.Templates'
    }))
    .pipe(concat('compiled.js'))
    .pipe(gulp.dest('app/templates'));
});

gulp.task('app', ['vendor', 'templates'], function() {
  return gulp.src([
    'app/vendor-compiled.js',
    'app/app.js',
    'app/templates/compiled.js',
    'app/config/environment.js',
    'app/config/environments/' + ENV + '.js',
    'app/models/**/*.js',
    'app/views/**/*.js'
  ])
    .pipe(concat('application.js'))
    .pipe(gulpif(ENV === 'production', uglify().on('error', gutil.log)))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('build', ['scss', 'app']);

gulp.task('watch', ['build'], function() {
  gulp.watch('scss/**/*', ['scss']);
  gulp.watch(['vendor/**/*.js', 'app/templates/**/*.hbs', 'app/**/*.js'], ['app']);
});

gulp.task('default', ['watch']);
