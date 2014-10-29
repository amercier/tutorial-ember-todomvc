import Ember from 'ember';

/**
 * Route for completed todos list
 *
 * @class
 * @extends Ember.Route
 */
var CompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

export default CompletedRoute;
