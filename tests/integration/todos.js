module('Integration Tests', {
  teardown: function() {
    Todos.reset();
  }
});

test('Application initializes correctly', function() {
  expect(1);
  visit('/');
  andThen(function() {
    equal(find('h1').text(), 'todos');
  });
});

test('Application displays the list of todos', function() {
  expect(4);
  visit('/');
  andThen(function() {
    equal(find('section#main > ul > li').size(), 3);
    equal(find('section#main > ul > li:nth-child(1) label').text(), 'Learn Ember.js');
    equal(find('section#main > ul > li:nth-child(2) label').text(), '...');
    equal(find('section#main > ul > li:nth-child(3) label').text(), 'Profit!');
  });

});

test('Application displays the list of active todos', function() {
  expect(1);
  visit('/active');
  andThen(function() {
    equal(find('section#main > ul > li').size(), 2);
  });

});

test('Application displays the list of completed todos', function() {
  expect(1);
  visit('/completed');
  andThen(function() {
    equal(find('section#main > ul > li').size(), 1);
  });
});
