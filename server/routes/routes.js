const router = require('express').Router();
const Auth = require('../auth/auth');
const User = require('../controllers/user');
const verifyToken = require('../auth/verifyToken');

// Auth
router.get('/verify', verifyToken, Auth.verify);
router.post('/register', Auth.register);
router.post('/login', Auth.login);
router.post('/logout', Auth.logout);

// User
router.get('/user', verifyToken, User.getInfo);

module.exports = router;
