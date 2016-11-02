import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),

  actions: {
    remove: function(model) {
      if(confirm(this.get('i18n').t('action.confirm'))) {
        model.destroyRecord();
      }
    }
  },

  model: function() {
    return this.store.findAll('<%= dasherizedModuleName %>');
  }
});
