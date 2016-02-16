import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    fileLoaded(passThrough, file) {
      this.set('content', file.data);
    }
  },

  passThrough: 'test'
});
