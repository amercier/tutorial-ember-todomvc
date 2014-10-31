module('Integration Tests');

test('Application initializes correctly', function() {
  expect(1);
  visit('/');
  andThen(function() {
    equal(find('h1').text(), 'todos');
    Todos.reset();
  });
});

test('Application displays the list of todos', function() {
  expect(4);
  visit('/');
  andThen(function() {
    equal(find('#main > ul > li').size(), 3);
    equal(find('#main > ul > li:nth-child(1) label').text(), 'Learn Ember.js');
    equal(find('#main > ul > li:nth-child(2) label').text(), '...');
    equal(find('#main > ul > li:nth-child(3) label').text(), 'Profit!');
    Todos.reset();
  });

});

test('Application displays the list of active todos', function() {
  expect(1);
  visit('/active');
  andThen(function() {
    equal(find('#main > ul > li').size(), 2);
    Todos.reset();
  });

});

test('Application displays the list of completed todos', function() {
  expect(1);
  visit('/completed');
  andThen(function() {
    equal(find('#main > ul > li').size(), 1);
    Todos.reset();
  });
});

test('Ticking an active todo completes it', function() {
  expect(2);
  visit('/');
  click('#main > ul > li:nth-child(2) input[type=checkbox]');
  andThen(function() {
    ok(find('#main > ul > li:nth-child(2)').hasClass('completed'));
    ok(!find('#main > ul > li:nth-child(3)').hasClass('completed'));
    Todos.reset();
  });
});

test('Ticking an completed todo re-actives it', function() {
  expect(1);
  visit('/');
  click('#main > ul > li:nth-child(1) input[type=checkbox]');
  andThen(function() {
    ok(!find('#main > ul > li:nth-child(1)').hasClass('completed'));
    Todos.reset();
  });
});
