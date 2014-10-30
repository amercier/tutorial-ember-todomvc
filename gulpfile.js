// Node modules
var
  _ = require('lodash'),
  $ = require('gulp-load-plugins')(); // Load automatically all gulp-* node modules
  async = require('async'),
  del = require('del'),
  eventStream = require('event-stream'),
  fs = require('fs'),
  gulp = require('gulp'),
  os = require('os'),
  path = require('path'),
  process = require('process'),
  runSequence = require('run-sequence');

// Config
var config = require('./gulp.json');
var paths = {
  es6: {
    src: [
      path.join(config.appDir, '*.js'),
      path.join(config.appDir, '**', '*.js')
    ],
    dest: config.buildDir
  },
  static: {
    src: [
      path.join(config.appDir, '**', '*.jpeg'),
      path.join(config.appDir, '**', '*.gif'),
      path.join(config.appDir, '**', '*.png'),
      path.join(config.appDir, '**', '*.svg'),
      path.join(config.appDir, 'index.html')
    ],
    dest: config.buildDir
  },
  templates: {
    src: path.join(config.appDir, '**', '*.hbs'),
    dest: config.buildDir
  },
  tests: {
    src: [
      path.join(config.testDir, '*.js'),
      path.join(config.testDir, '**', '*.js')
    ],
    dest: 'build/tests'
  },
  vendor: {
    src: path.join(config.vendorDir, "**", "*.*"),
    dest: path.join(config.buildDir, 'vendor')
  }
}

// Constants
var CWD = process.cwd();


// Cleaning
// -------

// TODO: Split into clean:dev, clean:dist, clean:test
gulp.task('clean', function (cb) {
  del([config.buildDir], cb);
});


// Copying
// -------

gulp.task('copy:static', function() {
  return gulp.src(paths.static.src)
    .pipe(gulp.dest(paths.static.dest));
});

gulp.task('copy:vendor', function() {
  return gulp.src(paths.vendor.src)
    .pipe(gulp.dest(paths.vendor.dest));
});

// gulp.task('copy:fixtures', function() {
//   return gulp.src('./tests/common/fixtures/**/*')
//     .pipe(gulp.dest(path.join(config.buildDir, 'fixtures')))
// });

// Compilation
// -----------

// Javascript modules transpilation
// .js (ES6) -> .js (ES5)
gulp.task('compile:es6', function() {
  var noBoostrapFilesFilter = $.filter(['**', '!app-main.js', '!app-test.js']);
  return gulp.src(paths.es6.src)
    .pipe($.plumber())
    .pipe(noBoostrapFilesFilter)
    .pipe($.if(config.debug, $.debug()))
    .pipe($.es6ModuleTranspiler({ type: 'amd' }))
    .pipe(noBoostrapFilesFilter.restore())
    .pipe(gulp.dest(paths.es6.dest));
});

// Handlebars templates compilation
// .hbs -> .js
gulp.task('compile:templates', function() {
  return gulp.src(paths.templates.src)
    .pipe($.plumber())
    .pipe($.if(config.debug, $.debug()))
    .pipe($.emberHandlebars({
      outputType: 'amd',
      inputType: 'ast',
      templateRegistration: function(name, contents) {
        return _.template(
          'define("<%= name %>", ["ember"], function(Ember) { ' +
            'Ember = Ember["default"]; ' +
            'return { "default": <%= contents %> }; ' +
          '});'
        )({ name: name, contents: contents });
      }
    }))
    //.pipe(insertEmberDependencyReferences())
    .pipe(gulp.dest(paths.templates.src));
});

// Stylesheets compilation
// .scss -> .css
gulp.task('compile:stylesheets', function (callback) {
  return gulp.src(path.join(config.appDir, '**', '*.scss'))
    .pipe($.plumber())
    .pipe($.rubySass())
    .pipe(gulp.dest(config.buildDir))
});

gulp.task('watch:stylesheets', ['compile:stylesheets'], function() {
  return $.watch(
    path.join(config.appDir, '**', '*.scss'),
    function (files, cb) {
      gulp.start('compile:stylesheets', cb);
    }
  );
});


// Watching
// --------

gulp.task('watch:templates', ['compile:templates'], function() {
  return $.watch(
    path.join(config.appDir, '**', '*.hbs'),
    function (files, cb) {
      gulp.start('compile:templates', cb);
    }
  );
});

gulp.task('watch:es6', ['compile:es6'], function() {
  return $.watch(
    path.join(config.appDir, '**', '*.js'),
    function (files, cb) {
      gulp.start('compile:es6', cb);
    }
  );
});

gulp.task('watch:static', ['copy:static'], function() {
  return $.watch([
      path.join(config.appDir, 'images', '**', '*.*'),
      path.join(config.appDir, 'index.html')
    ],
    function (files, cb) {
      gulp.start('copy:static', cb);
    }
  );
});

gulp.task('watch:all', ['watch:es6', 'watch:static', 'watch:stylesheets', 'watch:templates'])


// Development
// -----------

gulp.task(
  'connect',
  ['compile:es6', 'compile:stylesheets', 'compile:templates'],
  function() {
    return require('gulp-connect').server({
      root: config.buildDir,
      port: 9001/*,
      middleware: fixtureMiddleware*/
    });
  }
);

gulp.task('dev', function() {
  return runSequence(
    'clean',
    ['watch:all', 'copy:vendor', 'connect']
  );
});


// Testing
// -------

gulp.task('compile:tests', function () {
  return gulp.src(paths.tests.src)
    .pipe($.plumber())
    .pipe($.if(config.debug, $.debug()))
    .pipe($.es6ModuleTranspiler({ type: 'amd' }))
    .pipe(gulp.dest(paths.tests.dest));
});

gulp.task('test', function() {
  return runSequence(
    'clean',
    ['watch:all', 'copy:vendor'],
    'testem'
  );
});

gulp.task('default', ['dev']);
