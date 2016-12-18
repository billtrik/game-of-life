var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');
var browserifyInc = require('browserify-incremental')


function errorHandler(err) {
  console.error(err); this.emit('end');
}

module.exports = {
  dep: [],
  fn: function (gulp, done) {
      const browserifyOptions = Object.assign({}, browserifyInc.args, {
        debug: true
      });

      const b = browserify('./src/index.js', browserifyOptions).transform(babel)

      browserifyInc(b, {cacheFile: './browserify-cache.json'});

      return b.bundle()
        .on('error', errorHandler)
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js'));
  }
};
