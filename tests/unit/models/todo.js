// moduleForModel('todo', 'Todo Model');

module('unit/models/todo', {
  setup: function() {
    Ember.run(function () {
      Todos.reset();
    });
  },
  teardown: function() {
    Todos.reset();
  }
});

Todos.Todo.reopenClass({
  FIXTURES: [
   { id: 1, title: 'Learn Ember.js', isCompleted: true  },
   { id: 2, title: '...'           , isCompleted: false },
   { id: 3, title: 'Profit!'       , isCompleted: false }
  ]
});

QUnit.test('title property is gettable and settable', function() {
  var learn;
  Ember.run(function() {
    learn = store.find(1);
  });
  QUnit.equal(todo.get('title'), 'Learn Ember.js');
});


// module('unit/models/todo', {
//   setup: function() {
//     Ember.run(Todos, Todos.advanceReadiness);
//   },
//   teardown: function() {
//     Todos.reset();
//   }
// });

// QUnit.test('title property is gettable and settable', function() {
//   var todo = this.subject({
//     title: 'Learn Ember.js',
//     isCompleted: true
//   });

//   var result = todo.get('title');
//   QUnit.equal(result, 'Learn Ember.js', 'title was ' + result);
// });
