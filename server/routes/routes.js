const router = require('express').Router();
const User = require('../controllers/user');

router.get('/user', User.getInfo);

module.exports = router;
