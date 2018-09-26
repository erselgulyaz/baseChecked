const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const concat = require('gulp-concat');

gulp.task('connect', () => {
  connect.server({
    root: '',
    livereload: true,
    open: true
  });
});

gulp.task('html', function () {
  return watch('./*.html', () => {
    gulp.src('./*.html')
        .pipe(connect.reload());
  });
});
    
gulp.task('styles', () => {
  return watch('./src/stylesheets/baseChecked.scss', () => {
    gulp.src('./src/stylesheets/baseChecked.scss')
    .pipe(sass())
    .pipe(connect.reload())
    .pipe(concat('baseChecked.css'))
    .pipe(gulp.dest('./dist'));
  });
});

gulp.task('scripts', () => {
  return watch('./src/scripts/baseChecked.js', () => {
    gulp.src('./src/scripts/baseChecked.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(connect.reload())
    .pipe(concat('baseChecked.min.js'))
    .pipe(gulp.dest('./dist'));
  });
});

gulp.task('stylesmin', () => {
  gulp.src('./src/stylesheets/baseChecked.scss')
  .pipe(sass())
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(concat('baseChecked.min.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('babel', () =>
  gulp.src('./src/scripts/baseChecked.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('baseChecked.prod.js'))
    .pipe(gulp.dest('./dist/'))
);

gulp.task("default", ["connect", "html", "scripts", "styles"]);
gulp.task("prod", ["babel", "stylesmin"]);