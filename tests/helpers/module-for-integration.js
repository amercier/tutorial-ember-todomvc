/**
 * Setups an app for integration testing
 */
function moduleForIntegration (name) {
  var container = {};

  module(name, {
    setup: function setup() {
      container.App = startApp();
    },
    teardown: function teardown() {
      Ember.run(function() {
        container.App.destroy();
      });
    }
  });

  return container;
}
