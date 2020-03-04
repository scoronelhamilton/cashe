const router = require('express').Router();
const User = require('../controllers/user');

// Auth
router.post('/register', User.register);

// User
router.get('/user', User.getInfo);

module.exports = router;
