'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

gulp.task('clean', function(cb) {
  del([
      '.tmp/*'
    ], cb);
});

gulp.task('templates', ['clean'], function() {
  gulp.src('app/templates/**/*.hbs')
    // Compile each Handlebars template source file to a template function using Ember's Handlebars
    .pipe($.handlebars({
      handlebars: require('ember-handlebars')
    }))
    // Wrap each template function in a call to Ember.Handlebars.template
    .pipe($.wrap('Ember.Handlebars.template(<%= contents %>)'))
    // Declare template functions with Ember.TEMPLATES according to their path and filename
    .pipe($.declare({
      namespace: 'Ember.TEMPLATES',
      noRedeclare: true, // Avoid duplicate declarations
      processName: function(filePath) {
        // Allow nesting based on path using gulp-declare's processNameByPath()
        // You can remove this option completely if you aren't using nested folders
        // Drop the source/templates/ folder from the namespace path by removing it from the filePath
        return $.declare.processNameByPath(filePath.replace('app/templates/', '')).replace('.', '/');
      }
    }))
    // Write the output into the templates folder
    .pipe(gulp.dest('.tmp/'));
});

// Default task
gulp.task('default', ['templates']);
