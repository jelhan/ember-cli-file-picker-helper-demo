import Ember from 'ember';
/* global File, jQuery */

export default Ember.Test.registerAsyncHelper('uploadFile', function(app, content, name) {
  const file = new File(content, name, {});
  const event = jQuery.Event('change');
  event.target = {
    files: [file]
  };
  Ember.run(() => {
    find('.file-picker__input').trigger(event);
  });
});
