var ms = 0, App;

moduleForIntegration('Integration - Remove a todo');


asyncTest('Application fixtures are initialized', function() {
  expect(4);
  visit('/')
    .then(delay(ms))
    .then(function(msg) {
      equal(find('#main > ul > li').size(), Todos.Todo.FIXTURES.length);
      equal(find('#main > ul > li:nth-of-type(1) label').text(), Todos.Todo.FIXTURES[0].title);
      equal(find('#main > ul > li:nth-of-type(2) label').text(), Todos.Todo.FIXTURES[1].title);
      equal(find('#main > ul > li:nth-of-type(3) label').text(), Todos.Todo.FIXTURES[2].title);
      start(); // see http://api.qunitjs.com/QUnit.asyncTest/
    });
});


asyncTest('Typing a todo name and pressing ENTER adds a new todo', function() {
  expect(3);

  var text = 'My new awesome todo';

  visit('/')
    .then(delay(ms))
    .then(function () {
      return click('#main > ul > li:nth-of-type(2) button.destroy');
    })
    .then(delay(ms))
    .then(function(msg) {
      equal(find('#main > ul > li').size(), Todos.Todo.FIXTURES.length - 1);
      equal(find('#main > ul > li:nth-of-type(1) label').text(), Todos.Todo.FIXTURES[0].title);
      equal(find('#main > ul > li:nth-of-type(2) label').text(), Todos.Todo.FIXTURES[2].title);
      start(); // see http://api.qunitjs.com/QUnit.asyncTest/
    });
});
