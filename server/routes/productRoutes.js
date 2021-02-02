const express = require('express');
const controller = require('../controllers/products.js');

const router = express.Router();

router.get('/', controller.getAll);

router.get('/reviews', controller.getReviews);

module.exports = router;
