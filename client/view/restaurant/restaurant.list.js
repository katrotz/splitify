Template['restaurant.list'].helpers({
  restaurants: function() {
    return Restaurants.find().fetch();
  }
});

Template['restaurant.list'].events({
  'click .restaurant-delete-item': function(event) {
    event.preventDefault();

    Restaurants.remove(this._id);
  }
});