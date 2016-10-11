// jshint node: true
'use strict';

module.exports = {
  convertToDTO: function (post) {
    var result = post.toObject(); // mongoose object are immutable! modification of them gives no results! toObject method return a mutable copy of the passed object
    result.username = result.author.username;
    delete result.author;
    return result;
  }
};
