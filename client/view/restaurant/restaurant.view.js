Template['restaurant.view'].helpers({
  restaurant: function(){
    var id = Router.current().params._id;
    var item = Restaurants.findOne({_id:id});
    return item;
  }
});

Template['restaurant.view'].events({
  'click #restaurant-delete-btn': function(event) {
    event.preventDefault();
    var id = Router.current().params._id;
    Restaurants.remove(id);
    Router.go('restaurant.list');
  }
});