import Ember from 'ember';
import $ from 'jquery';

var EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);

export default EditTodoView;
