module.exports = {
  dep: [],
  fn: function (gulp, done) {
    gulp.watch('src/js/**/*.js', ['js:build']);
    gulp.watch('src/scss/**/*.scss', ['css:build']);
    done();
  }
};
