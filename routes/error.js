// route for errors
const errorController = require('../controllers/error');

const express = require('express');

const router = express.Router();

router.use('/inputerror', errorController.getErrorInvalidInput);

router.use(errorController.getError404);

module.exports = router;