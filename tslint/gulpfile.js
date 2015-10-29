console.log(process.cwd());
const gulp       = require('gulp');
const tslint     = require('gulp-tslint');
const minimist = require('minimist');

const knownOptions = {
  string: 'pattern',
  default: { pattern: '*.ts' }
};

var options = minimist(process.argv.slice(7), knownOptions);

gulp.task('default', function() {
  return gulp.src(options.pattern.split(','))
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      summarizeFailureOutput: true
    }));
});