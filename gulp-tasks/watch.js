const runSequence = require('run-sequence');

module.exports = {
  dep: [],
  fn: function (gulp, done) {
    return gulp.watch('src/**/*.js', () => runSequence('js:build'));
  }
};
