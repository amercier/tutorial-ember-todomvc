function startApp(attrs) {
  var App;

  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function() {
    App = Ember.Application.create();
    App.setupForTesting();
    App.injectTestHelpers();

    App.Todo.reopenClass({
      FIXTURES: $.extend(true, [], Todos.Todo.FIXTURES) // extend, otherwise the TodoFixtures gets mutated
    });
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}
