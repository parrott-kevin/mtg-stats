/**
 * Created by parrott-kevin on 1/6/15.
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');

var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

//---------------------------------------------------------------------------//
// Compilation Tasks
//---------------------------------------------------------------------------//

// Dev task
gulp.task('dev', [
    'clean:dev',
    'styles',
    'fonts:dev'
  ], function() {}
);

gulp.task('dist', [
  'clean:dist',
  'compress:js',
  'compress:lib',
  'compress:css',
  'copy:html',
  'copy:fonts'
]);

//---------------------------------------------------------------------------//
// Common Tasks
//---------------------------------------------------------------------------//

// Styles task
gulp.task('styles', function() {
  gulp.src('./public/assets/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('./public/assets/css'));
});

//---------------------------------------------------------------------------//
// Tasks for running dev
//---------------------------------------------------------------------------//

// Clean task for dev
gulp.task('clean:dev', function() {
  del.sync(['public/assets/css/*', 'public/assets/fonts/*']);
});

// Copy fonts for dev
gulp.task('fonts:dev', function() {
  gulp.src([
    'public/lib/bootstrap/fonts/*'
  ])
    .pipe(gulp.dest('public/assets/fonts'));
});

// Clean task for dist
gulp.task('clean:dist', function() {
  del.sync(['public/dist/*']);
});

// Compress javascript
gulp.task('compress:js', function() {
  return gulp.src('./public/src/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.concat.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('compress:lib', function() {
  var libDirectory = './public/src/lib/';
  var libSrc = [
    'angular/angular.js',
    'angular-route/angular-route.js',
    'angular-bootstrap/ui-bootstrap.js',
    'angular-bootstrap/ui-bootstrap-tpls.js',
    'lodash/lodash.js'
  ];
  var lib = libSrc.map(function(i) {
    return libDirectory + i;
  });

  return gulp.src(lib)
    .pipe(concat('lib.concat.js'))
    .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('compress:css', function() {
  return gulp.src('./public/src/assets/css/*.css')
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('copy:html', function() {
  return gulp.src('./public/src/**/*.html')
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('copy:fonts', function() {
  return gulp.src('./public/src/assets/fonts')
    .pipe(gulp.dest('./public/dist/fonts'));
});
