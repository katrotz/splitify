Template['profile.view'].helpers({
  'profile': function(){
    return Users.findOne({username: Router.current().params.username});
  }
});