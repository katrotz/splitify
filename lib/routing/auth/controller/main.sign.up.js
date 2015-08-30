AuthSignUpController = ApplicationController.extend({
  template: 'sign.up',
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