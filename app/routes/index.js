import Ember from 'ember';

/**
 * Route for the index page (all todos list)
 *
 * @class
 * @extends Ember.Route
 */
var IndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

export default IndexRoute;
