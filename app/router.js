
Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});
