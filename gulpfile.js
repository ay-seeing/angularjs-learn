var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', function () {
  return gulp.src('css/style.css')
    .pipe(autoprefixer({
      // browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});

// CLI（command-line interface，命令行界面）
// CTL  control 控制