'use strict';

var express = require('express');
var controller = require('./voice.controller');

var router = express.Router();

router.get('/contacts', controller.getContacts);
router.post('/send', controller.sendMessage);

module.exports = router;