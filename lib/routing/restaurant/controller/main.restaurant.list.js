RestaurantListController = ApplicationController.extend({
  template: 'restaurant.list',
  //yieldRegions: {},
  subscriptions: function() {
    this.subscribe('restaurants');
  },
  waitOn: function() {
    return Meteor.subscribe('restaurants');
  },
  data: function() {}
});