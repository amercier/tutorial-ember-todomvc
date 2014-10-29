import DS from 'ember/data';
import 'ember/local-storage-adapter';

/**
 * This is the RESTAdapter for the entire application.
 * For our purposes we just need to say where our API is.
 * @type {String}
 */
export default DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
