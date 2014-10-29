import Ember from 'ember';

/**
 * Route for active todos list
 *
 * @class
 * @extends Ember.Route
 */
var ActiveTodosRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

export default ActiveTodosRoute;
