var gulp = require('gulp');
var pweblib = require('pemberly-web-lib');

pweblib.addDefaultTasks(gulp, {
  enableTranslations: true,
  requirejs: {
    modules: [{
      name: 'app-main',
      exclude: ['framework']
    }, {
      name: 'common/routes/profile_dependencies',
      exclude: ['framework']
    }]
  },
  connect: {
    urlBase: 'pemberly-sample'
  }
});
