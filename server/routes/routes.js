const router = require('express').Router();
const Auth = require('../auth/auth');
const User = require('../controllers/user');
const Transaction = require('../controllers/transaction');
const verifyToken = require('../auth/verifyToken');

router.get('/verify', verifyToken, Auth.verify);
router.post('/register', Auth.register);
router.post('/login', Auth.login);
router.post('/logout', Auth.logout);

router.get('/user', verifyToken, User.getInfo);

router.get('/transactions', verifyToken, Transaction.getAll);

module.exports = router;
