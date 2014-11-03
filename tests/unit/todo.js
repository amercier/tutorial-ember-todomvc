import QUnit from 'qunit';
import App from 'app';
import Todo from 'models/todo';

QUnit.module('models/todo', function() {

  Qunit.test('title property is gettable and settable', function() {
    var todo = App.Todo.create({
      title: 'Learn Ember.js',
      isCompleted: true
    });

    var result = todo.get('title');
    QUnit.equal(result, 'Learn Ember.js', 'title was ' + result);
  });

});
