AuthSignInController = ApplicationController.extend({
  template: 'sign.in',
  layoutTemplate: 'empty',
  yieldRegions: {},
  subscriptions: function() {},
  data: function() {},
  onBeforeAction: function() {
    var user = Meteor.user();

    if (user) {
      return Router.go('profile');
    } else {
      return this.next();
    }
  }
});