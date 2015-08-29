Template['restaurant.list'].helpers({
  restaurants: function() {
    return Restaurants.find().fetch();
  }
});