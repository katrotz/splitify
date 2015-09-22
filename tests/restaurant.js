'use strict';

var assert = require('assert');

suite('Restaurants', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Restaurants.insert({
        title: 'Test restaurant',
        description: 'Test restaurant',
        picture: '/images/food/Food (1).jpg'
      });
      var docs = Restaurants.find().fetch();
      emit('docs', docs);
    });

    server.once('docs', function(docs) {
      assert.equal(docs.length, 1);
      done();
    });
  });
});