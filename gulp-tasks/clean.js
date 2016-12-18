const rm = require( 'gulp-rm' );

module.exports = {
  dep: [],
  fn: function (gulp, done) {
    return gulp
      .src( ['browserify-cache.json', 'public/js/*'], { read: false })
      .pipe( rm() )
  }
};
