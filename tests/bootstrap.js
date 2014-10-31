Todos.rootElement = '#qunit-fixture';
Todos.setupForTesting();
Todos.injectTestHelpers();
Todos.ApplicationAdapter = DS.FixtureAdapter;
Todos.Todo.FIXTURES = [
  { id: 1, title: 'Learn Ember.js', isCompleted: true  },
  { id: 2, title: '...'           , isCompleted: false },
  { id: 3, title: 'Profit!'       , isCompleted: false }
];

QUnit.test('QUnit initializes successfully', function() {
  QUnit.ok(true);
});
