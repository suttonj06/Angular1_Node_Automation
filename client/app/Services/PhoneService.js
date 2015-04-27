(function() {
    'use strict';

    angular.module('homeNetApp')
        .factory('PhoneService', PhoneService);

    PhoneService.$inject = ['$http'];

    function PhoneService($http) {
    	var _url = 'http://localhost:9000/api/voice/send'

        var phoneService = {
            sendMessage: _sendMessage
        };

        return phoneService;

        function _sendMessage(msg, sendTo) {
            $http.post(_url, {
                msg: msg || 'Message has been sent but failed to load correctly.',
                sendTo: sendTo || 'Invalid Receipient'
            }).
            success(function(data, status, headers, config) {
                console.log('Sending message status: ' + data);
            }).
            error(function(data, status, headers, config) {
                console.log('Sending message to cell phone failed.');
            });
        }
    };
})();
