var db = require('../db');

var Post = db.model('Post', {
  author: { type: db.Schema.ObjectId, ref: 'User' },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now }
});

module.exports = Post;
