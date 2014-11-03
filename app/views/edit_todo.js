import Ember from 'ember';
import $ from 'jquery';

console.log('edit_todo');

var EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);

export default EditTodoView;
