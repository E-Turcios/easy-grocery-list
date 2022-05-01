const router = require('express').Router();
const decodeToken = require('../auth');
module.exports = router;

router.get('/', decodeToken, (req, res, next) => {
  res.send('hello world');
});
