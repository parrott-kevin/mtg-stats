'use strict';

var express = require('express');
var router = express.Router();

var cards = require('../controllers/cards');
var sets = require('../controllers/sets');

router.get('/card/info', cards.get.info);
router.get('/card/search', cards.get.search);
router.get('/set/', sets.get.setInfo);

module.exports = router;
