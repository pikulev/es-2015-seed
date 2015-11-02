var appRoot = 'app/';
var outputRoot = 'dist/';

module.exports = {
  baseHref: process.env.BASE_HREF ? process.env.BASE_HREF : '/',
  root: appRoot,
  scripts: appRoot + 'scripts/**/*.js',
  html: appRoot + 'scripts/**/*.html',
  sass: appRoot + 'sass/**/*.scss',
  index: appRoot + 'index.html',
  fonts: appRoot + 'fonts/**/*',
  images: appRoot + 'images/**/*',
  output: {
    root: outputRoot,
    index: '.',
    sass: outputRoot + 'css',
    scripts: outputRoot + 'scripts',
    html: outputRoot + 'scripts',
    fonts: outputRoot + 'fonts',
    images: outputRoot + 'images'
  }
};