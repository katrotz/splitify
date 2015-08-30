AuthProfileController = ApplicationController.extend({
  template: 'profile',
  yieldRegions: {},
  subscriptions: function() {},
  data: function() {},
  onBeforeAction: function() {
    var user = Meteor.user();

    if (!user) {
      return Router.go('sign.in');
    } else {
      return this.next();
    }
  }
});