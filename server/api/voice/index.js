'use strict';

var express = require('express');
var controller = require('./voice.controller');

var router = express.Router();

router.get('/contacts', controller.getContacts);
router.post('/send', controller.sendMessage);
router.get('/getConversations', controller.getConversations);
router.get('/getMessages/:id', controller.getMessages);

module.exports = router;