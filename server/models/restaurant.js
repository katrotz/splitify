Restaurants.allow({
  insert: function(userId, restaurant) {
    console.log(userId);
    console.log(restaurant);
    return true;
  },
  update: function(userId, restaurant) {
    return false;
  },
  remove: function(userId, restaurant) {
    return false;
  }
});

Meteor.publish('restaurants', function() {
  return Restaurants.find();
});