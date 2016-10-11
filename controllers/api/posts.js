// jshint node: true
'use strict';

var Post = require('../../models/post'),
    User = require('../../models/user'),
    router = require('express').Router(),
    websockets = require('../../websockets'),
    pubsub = require('../../pubsub'),
    postUtils = require('../../utils/postUtils'),
    _ = require('lodash');

router.get('/', function (req, res, next) {
  Post.find()
      .sort('-date')
      .populate('author')
      .exec(function (err, posts) {
    if (err) { return next(err); }
    posts.forEach(function (post, i, arr) {
      if (typeof post.author !== 'undefined') {
        // TODO should create new DTO object with only needed properies and pass it to the view instead of modifying object from from DB
        console.log(postUtils);
        arr[i] = postUtils.convertToDTO(post);
      }
      else {
        // posts without author are interpreted as corrupted and won't be passed further
        _.remove(posts, post);
      }
    });
    res.json(posts);
  });
});

router.post('/', function (req, res, next) {
  var post = new Post({
    body: req.body.body
  });
  if (req.auth) {
    User.findOne({ username: req.auth.username }, function (err, user) {
      post.author = user;
      post.save(function (err, post) {
        if (err) { return next(err); }
        var postDTO = postUtils.convertToDTO(post);
        pubsub.publish('new_post', postDTO);
        res.status(201).json(postDTO);
      });
    });
  }
  else {
    res.status(401).end();
    return;
  }
});

module.exports = router;
