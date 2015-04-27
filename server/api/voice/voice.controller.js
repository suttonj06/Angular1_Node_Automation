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
    _client.altsms({ to: to, text: text}, function(err, _res, data){
		if(err){
			return console.log(err);
		}
		console.log(util.inspect(_res));
		console.log('SMS "' +text+ '" sent to', to);//to.join(', '));
    	res.send(200, 'Message successfully sent.');
	});
}



/* Download all contacts and display them.
client.contacts('get', function(error, response, data) {
    if (error) {
        return console.log(error)
    }

    console.log('\nPHONEBOOK:');
    util.inspect(data);
    for (var id in data.contacts) {
        console.log('\n', data.contacts[id].name, data.contacts[id].emails.join(', '));
        data.contacts[id].numbers.forEach(function(number) {
            console.log('    %s: %s', number.phoneType, number.displayNumber);
        });
    };
});


// There are two ways to send texts. 

// The first method returns the new conversation id, but doesn't allow sending to multiple recipients
client.sms({ to: to[0], text: text}, function(err, res, data){
	if(err){
		return console.log(err);
	}
	console.log('SMS "' +text+ '" sent to', to[0] + '. Conversation id: ', data.send_sms_response.conversation_id);
});


// The second method does NOT return the new conversation id, but allows sending to multiple recipients
client.altsms({ to: to, text: text}, function(err, res, data){
	if(err){
		return console.log(err);
	}
	console.log('SMS "' +text+ '" sent to', to);//to.join(', '));
});*/
