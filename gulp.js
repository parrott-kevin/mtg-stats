/**
 * Created by parrott-kevin on 1/6/15.
 */

var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

//---------------------------------------------------------------------------//
// Compilation Tasks
//---------------------------------------------------------------------------//

// Dev task
gulp.task('dev', [
    'clean:dev',
    'styles',
    'fonts:dev',
    'webserver:dev',
    'watch'
  ], function() {}
);

//---------------------------------------------------------------------------//
// Common Tasks
//---------------------------------------------------------------------------//

// Styles task
gulp.task('styles', function() {
  gulp.src('src/assets/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('src/assets/css'));
});

// Watch less files for changes
gulp.task('watch', function() {
  gulp.watch(['src/assets/less/*.less'], ['styles']);
});

//---------------------------------------------------------------------------//
// Tasks for running dev
//---------------------------------------------------------------------------//

// Clean task for dev
gulp.task('clean:dev', function() {
  del.sync(['src/assets/css/*', 'src/assets/fonts/*']);
});

// Copy fonts for dev
gulp.task('fonts:dev', function() {
  gulp.src([
    'bower_components/bootstrap/fonts/*',
    'bower_components/fontawesome/fonts/*'
  ])
    .pipe(gulp.dest('src/assets/fonts'));
});

// Start webserver for dev
gulp.task('webserver:dev', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: 'src'
    }));
});

