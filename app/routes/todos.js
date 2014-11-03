import Ember from 'ember';

/**
 * Route for the individual todo items
 *
 * @class
 * @extends Ember.Route
 */
var TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

export default TodosRoute;
