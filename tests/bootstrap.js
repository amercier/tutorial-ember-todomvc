Todos.rootElement = '#qunit-fixture';
Todos.setupForTesting();
Todos.injectTestHelpers();
Todos.ApplicationAdapter = DS.FixtureAdapter;
Todos.Todo.FIXTURES = [
  { id: 1, title: 'Learn Ember.js', isCompleted: true  },
  { id: 2, title: '...'           , isCompleted: false },
  { id: 3, title: 'Profit!'       , isCompleted: false }
];

emq.globalize();
setResolver(Ember.DefaultResolver.create({ namespace: Todos }));

QUnit.test('QUnit initializes successfully', function() {
  QUnit.ok(true);
});

// window.setupStore = function(options) {
//   // var env = {};
//   // options = options || {};

//   var container = new Ember.Container();

//   // var adapter = env.adapter = (options.adapter || DS.Adapter);
//   // delete options.adapter;

//   // for (var prop in options) {
//   //   console.log('model:' + prop);
//   //   container.register('model:' + prop, options[prop]);
//   // }

//   container.register('store:main', DS.Store.extend());

//   // // container.register('serializer:-default', DS.JSONSerializer);
//   // // container.register('serializer:-rest', DS.RESTSerializer);
//   // // container.register('adapter:-rest', DS.RESTAdapter);

//   // container.injection('serializer', 'store', 'store:main');

//   // env.serializer = container.lookup('serializer:-default');
//   // // env.restSerializer = container.lookup('serializer:-rest');
//   // env.store = container.lookup('store:main');
//   // env.adapter = env.store.get('defaultAdapter');

//   // return env;
//   return {
//     store: DS.Store.extend()
//   };
// };

// window.createStore = function(options) {
//     return setupStore(options).store;
// };
