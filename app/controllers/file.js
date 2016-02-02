import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    fileLoaded(file) {
      this.set('content', file.data);
    }
  }
});
