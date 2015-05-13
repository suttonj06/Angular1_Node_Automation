(function() {
    'use strict';

    angular.module('homeNetApp')
        .factory('PhoneService', PhoneService);

    PhoneService.$inject = ['$http', '$q'];

    function PhoneService($http, $q) {

        var phoneService = {
            sendMessage: _sendMessage,
            getConversations: _getConversations,
            getMessagesByID: _getMessages
        };

        return phoneService;

        function _sendMessage(msg, sendTo) {
            var _url = 'http://localhost:9000/api/voice/send';
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

        function _parseMessageResponse(data) {
            if (data && data.conversations_response &&
                data.conversations_response.conversationgroup &&
                data.conversations_response.conversationgroup[0] &&
                data.conversations_response.conversationgroup[0].call) {

                return data.conversations_response.conversationgroup[0].call;
            } else {
                return false;
            }
        }

        function _parseAllMessages(data) {
            if(data && data.conversations_response &&
                data.conversations_response.conversationgroup){

                return data.conversations_response.conversationgroup;
            }
        }

        function _getMessages(id) {
            var _url = 'http://localhost:9000/api/voice/getMessages/' + id,
                _deffered = $q.defer();
            $http.get(_url)
                .success(function(data, status, headers, config) {
                    data = _parseMessageResponse(data);
                    if (data) {
                        _deffered.resolve(data);
                    } else {
                        console.log('no convo recieved');
                    }
                })
                .error(function(data, status, headers, config) {
                    console.log('Retrieving conversation for user failed.');
                });

            return _deffered.promise;
        }

        function _getConversations() {
            var _url = 'http://localhost:9000/api/voice/getConversations',
                _deffered = $q.defer();
            $http.get(_url)
                .success(function(data, status, headers, config) {
                    data = _parseAllMessages(data);
                    if (data) {
                        _deffered.resolve(data);
                    } else {
                        console.log('no convos recieved');
                    }
                })
                .error(function(data, status, headers, config) {
                    console.log('Retrieving all conversations failed.');
                });

            return _deffered.promise;
        }
    };
})();
