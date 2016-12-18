const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

module.exports = {
  dep: [],
  fn: function (gulp, done) {
    const sassOptions = {
      errLogToConsole: true,
      outputStyle: 'expanded'
    };

    const autoprefixerOptions = {
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    };

    return gulp
      .src('./src/scss/styles.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./public/css'));
  }
};
