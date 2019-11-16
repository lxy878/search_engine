// route for web scrap
const crawler = require('../controllers/crawler');

const express = require('express');

const router = express.Router();

router.get('/scrap', crawler.getScrap);

router.post('/scrap', crawler.postScrap);

module.exports = router;