const runSequence = require('run-sequence');

module.exports = {
  dep: [],
  fn: function (gulp, done) {
    gulp.watch('src/**/*.js', ['js:build']);
    gulp.watch('scss/**/*.scss', ['css:build']);
    done();
  }
};
