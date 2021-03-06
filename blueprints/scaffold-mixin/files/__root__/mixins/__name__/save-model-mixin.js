import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Mixin.create(AuthenticatedRouteMixin, {
  i18n: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  busy: Ember.inject.service(),

  actions: {
    save: function() {
      var route = this;
      route.get('busy').show();

      this.currentModel.save().then(function(savedObject) {
        route.get('busy').hide();
        route.transitionTo('<%= dasherizedModuleNamePlural %>.show', savedObject);
        route.get('notify').success(route.get('i18n').t('<%= dasherizedModuleName %>.messages.save.success'));
      }, function() {
        route.get('busy').hide();
        route.get('notify').error(route.get('i18n').t('<%= dasherizedModuleName %>.messages.save.error'));
      });
    }
  },
  deactivate: function() {
    if (this.currentModel.get('isNew')) {
      this.currentModel.deleteRecord();
    } else {
      this.currentModel.rollbackAttributes();
    }
  }
});
