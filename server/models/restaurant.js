Restaurants.allow({
  insert: function(userId, restaurant) {
    return true;
  },
  update: function(userId, restaurant) {
    return false;
  },
  remove: function(userId, restaurant) {
    return true;
  }
});

Meteor.publish('restaurants', function() {
  return Restaurants.find();
});