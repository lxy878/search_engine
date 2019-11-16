// route for public/users
const express = require('express');

const results = require('../controllers/search');

const router = express.Router();

router.get('/', results.getIndex);

router.get('/index', results.getIndex);

router.get('/results', results.getResults);

module.exports = router;