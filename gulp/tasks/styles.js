var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssVars = require('postcss-simple-vars')
var nested = require('postcss-nested')
var cssImport = require('postcss-import')
var mixins = require('postcss-mixins')

gulp.task('styles', function () {
  console.log('#######Building styles.css#######')
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, autoprefixer]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString())
      this.emit('end')
    })
    .pipe(gulp.dest('./app/temp/styles'))
})
