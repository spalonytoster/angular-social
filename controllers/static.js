var router = require('express').Router(),
    appRoot = require('app-root-path');

router.get('/', function (req, res) {
  res.sendFile('posts.html', { root: appRoot + '/layouts/' });
});

module.exports = router;
