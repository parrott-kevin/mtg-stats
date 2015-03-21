/**
 * Created by parrott-kevin on 1/6/15.
 */
'use strict';

var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');

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
    'public/lib/bootstrap/fonts/*',
    'public/lib/fontawesome/fonts/*'
  ])
    .pipe(gulp.dest('public/assets/fonts'));
});
