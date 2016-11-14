// *** dependencies *** //

const gulp = require('gulp');
const connect = require('gulp-connect');
const runSequence = require('run-sequence');

// *** tasks *** ///

gulp.task('connect', () => {
  connect.server({
    root: './src/',
    port: process.env.PORT || 8888,
    livereload: true
  });
});

// *** default task *** //
gulp.task('default', () => {
  runSequence(
    ['connect']
  );
});
