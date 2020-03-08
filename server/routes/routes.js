const router = require('express').Router();
const Auth = require('../auth/auth');
const User = require('../controllers/user');
const Transaction = require('../controllers/transaction');
const StockData = require('../controllers/stockData.js');
const verifyToken = require('../auth/verifyToken');

router.get('/verify', verifyToken, Auth.verify);
router.post('/register', Auth.register);
router.post('/login', Auth.login);
router.post('/logout', Auth.logout);

router.get('/user', verifyToken, User.getInfo);
router.post('/stock', verifyToken, User.buyStock);

router.get('/transactions', verifyToken, Transaction.getAll);

router.get('/symbols', verifyToken, StockData.getSymbols);
router.get('/opening-prices', verifyToken, StockData.getOpeningPrices);
router.get('/prices', verifyToken, StockData.getLastPrice);

module.exports = router;
