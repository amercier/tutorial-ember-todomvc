
// function shimEs6Module(name, deps, exports) {
//   define(name, deps, function (global) {
//     return function() {
//       console.info('ES6', name, global[exports]);
//       var module = {
//         'default': global[exports]
//       };
//       return module;
//     };
//   }(this));
// }

// shimEs6Module('jquery', ['vendor/jquery/dist/jquery'], '$');
// shimEs6Module('ember', ['vendor/ember/ember'], 'Ember');

require.config({
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'handlebars': 'vendor/handlebars/handlebars',
    'ember': 'vendor/ember/ember',
    'ember/data': 'vendor/ember-data/ember-data',
    'ember/resolver': 'vendor/ember-resolver/dist/ember-resolver',
    'ember/load-initializers': 'vendor/ember-load-initializers/ember-load-initializers',
    'ember/container-debug-adapter': 'vendor/ember-resolver/dist/ember-resolver',
    'ember/local-storage-adapter': 'vendor/ember-localstorage-adapter/localstorage_adapter'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'handlebars': {
      deps: ['jquery'],
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember',
      init: function() {
        return { 'default': window.Ember };
      }
    },
    'ember/data': {
      deps: ['ember'],
      exports: 'DS',
      init: function() {
        return { 'default': window.DS };
      }
    },
    'ember/local-storage-adapter': {
      deps: ['ember/data']
    },
     'ember/resolver': {
      deps: ['ember']
    },
    'ember/container-debug-adapter': {
      deps: ['ember/resolver']
    },
    'ember-renderspeed': {
      deps: ['ember']
    }
  }
});

// Start the application
require(['app'],
  function() {
  },
  function (err) {
    console.error('RequireJ failed to load ' + (err.requireModules && err.requireModules[0]) + '.', err.stack);
  }
);
