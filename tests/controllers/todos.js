// var store = {
//   createRecord: function(model, attrs) {
//     obj = Ember.Object.create(attrs);
//     obj.save = function() {
//       return {
//         then: function(callback) { return callback(obj); }
//       };
//     };
//     return obj;
//   }
// };

// module('Todos Controller', {
//   setup: function() {
//     container = new Ember.Container();
//     container.register('controller:todos', Todos.TodosController);
//     controller = container.lookup('controller:todos');
//     controller.set('store', store);
//     controller.set('model', Ember.ArrayProxy.create(Todos.Todo.FIXTURES));
//   },
//   teardown: function() {
//     container.destroy();
//   }
// });

// test('createTodo', function() {
//   controller.set('newTitle', 'New task');
//   controller.send('createTodo');
//   equal('', controller.get('newTitle'));
//   equal(1, controller.get('model.todos.length'));
// });

!function() {
  var App,store, todos, controller;

  moduleFor('controller:todos', 'Todos Controller', {
    needs: [
      'controller:todo'
    ],
    setup: function() {
      controller = this.subject();
      store = DS.Store.extend();
      controller.set('store', store);
    }
  });

  test('calling the action createTodo adds a todo', function() {
    expect(1);
    var controller = this.subject(),
      todoController = controller.get('controllers.todo');

    Ember.run(function() {
      // equal(store.length, 0);

      controller.set('newTitle', 'New todo');
      equal(controller.get('newTitle'), 'New todo');
      controller.send('createTodo');

      equal(store.length, 1);
    });
  });

}();
