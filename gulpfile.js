const gulp = require('gulp');
const runSequence = require('run-sequence');

require('gulp-require-tasks')();

gulp.task('default', (done) => {
  runSequence(
    'clean',
    'js:build',
    'css:build',
    ['server', 'watch'],
    done
  );
});
