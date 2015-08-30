Template['participant.list'].helpers({
  'users': function() {
    return Users.find().fetch();
  }
});