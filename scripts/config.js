module.exports = {
  path: {
    libs: {
      bower: './../bower_components/'
    },
    src: {
      root: './../src/',
      less: './../src/less/**/style.less',
      lessWatch: './../src/less/**/*.less',
      js: './../src/js/**/*.js',
      html: './../src/*.html',
      img: './../src/img/**/*',
      templates: './../src/templates/**/*.html'
    },
    dest: {
      root: './../dest/',
      css: './../dest/css/',
      js: './../dest/js/',
      html: './../dest/',
      img: './../dest/img/'
    }
  }
};
