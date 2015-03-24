'use strict';

var express = require('express');
var router = express.Router();

var cardController = require('../controllers/card.controller');
var setController = require('../controllers/set.controller');

router.get('/card/info', cardController.get.info);
router.get('/card/search', cardController.get.search);
router.get('/set/', setController.get.setInfo);

module.exports = router;
