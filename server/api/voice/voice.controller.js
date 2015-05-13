'use strict';
var voicejs = require('voice.js'),
    config = require('./config.json'),
    util = require('util');

var _client = new voicejs.Client({
    email: process.argv[2] || config.username,
    password: process.argv[3] || config.password,
    tokens: require('./tokens.json')
});

var text = process.argv[4] || '<message not loaded correctly>';
var to = '' || '<invalid recipient>';

exports.getContacts = function(req, res) {
    console.log('Contacts request: ' + util.inspect(req.data));
};

exports.sendMessage = function(req, res) {
    console.log('Sending Message' + util.inspect(req.body.msg));
    text = req.body.msg;
    to = req.body.sendTo;
    _client.sms({
        to: to[0],
        text: text
    }, function(err, _res, data) {
        if (err) {
            return console.log(err);
        }
        console.log('responseItem: ' + util.inspect(_res));
        console.log('dataItem: ' + util.inspect(data));
        console.log('SMS "' + text + '" sent to', to[0]); //to.join(', '));
        res.send(200, 'Message successfully sent to: ' + data.send_sms_response.conversation_id);
    });
}

exports.getMessages = function(req, res) {
        console.log('id bitch!: ' + req.params.id);
        _client.get('byId', {
            id: req.params.id
        }, function(error, response, data) {
            if (error) {
                res.send(500, "FAILURE TO LOAD CONVERSATION... TOO BAD");
            }
            if (!data || !data.conversations_response || !data.conversations_response.conversationgroup) {
                return res.send(200, 'No conversations.')
            }

            console.log('\nFetched by id:');
            res.send(200, data);
        });
    }
    
    exports.getConversations = function(req, res) {
        // Get the 5 latest sms conversations and display their threads, from first text to last
        _client.get('sms', {limit: 5}, function(error, response, data){
            if(error){
                return res.send(500, 'FAIL TO RETRIEVE ALL CONVERSATIONS');
            }
            if(!data || !data.conversations_response || !data.conversations_response.conversationgroup){ 
                return res.send(200, 'No conversations.')
            }
            res.send(200, data);
        });
    }
