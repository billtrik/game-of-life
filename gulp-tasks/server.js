const webserver = require('gulp-webserver');

module.exports = {
  dep: [],
  fn: function (gulp, done) {

    const serverOptions = {
      livereload: false,
      directoryListing: false,
      open: true
    };

    return gulp
      .src( './public/' )
      .pipe(webserver(serverOptions));
  }
};
