/**
 * Pemberly
 * ========
 *
 * TODO: Do we need linkedin/pemberly?
 * TODO: Do we need linkedin/lixEmber?
 * TODO: Do we need linkedin/utils/performance?
 */

// import 'linkedin/pemberly';
// import 'linkedin/mixins/lixEmber';
// import Performance from 'linkedin/utils/performance';


/**
 * Ember
 * =====
 *
 * TODO: Do we need ember/load-resolver?
 * TODO: Do we need ember/load-initializers?
 */

import Ember from 'ember';
// import 'ember/container-debug-adapter';
// import Resolver from 'ember/resolver';
// import loadInitializers from 'ember/load-initializers';


/**
 * Application
 * ===========
 *
 * TODO: Check if we need to add serializers
 * TODO: Do we need serializers?
 * TODO: Do we need jQuery mixin?
 * TODO: Do we need the Group helper?
 * TODO: Do we need initializers?
 * TODO: Load all routes automatically
 */

// import 'adapters/application';
// import 'helpers/group';
// import 'initializers/bigpipe';
// import 'initializers/queue';
// import 'initializers/url-collector';
// import 'initializers/linkedin-store';
// import 'serializers/todo';

var Todos = Ember.Application.create();

import ApplicationAdapter from 'adapters/application';
import Router from 'router';
import IndexRoute from 'routes/index';
import ActiveRoute from 'routes/active';
import CompletedRoute from 'routes/completed';
import TodosRoute from 'routes/todo';
import Todo from 'models/todo';
import 'views/edit_todo.js';
import TodosController from 'controllers/todos';
import TodoController from 'controllers/todo';

Todos.ApplicationAdapter = ApplicationAdapter;
Todos.Router = Router;
Todos.IndexRoute = IndexRoute;
Todos.TodosActiveRoute = ActiveRoute;
Todos.TodosCompletedRoute = CompletedRoute;
Todos.TodosRoute = TodosRoute;
Todos.Todo = Todo;
Todos.TodosController = TodosController;
Todos.TodoController = TodoController;

// The AMD resolver looks for loaded modules at require.entries
// require.entries = require.entries ||
//   require._defined || require.s.contexts._.defined;
// requirejs._eak_seen = requirejs.entries;

// Stuf App with initializers
// loadInitializers(App, 'common');

export default Todos;
