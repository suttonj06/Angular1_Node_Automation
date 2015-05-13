'use strict';

angular.module('homeNetApp')
    .controller('CommunicationCtrl', function($scope, $interval, $http, $stateParams, PhoneService) {
        
        $interval(_getMessages, 30000);
        $scope.sendMessage = _sendMessage;
        $scope.getMessages = _getMessages;
        $scope.chat;
        $scope.message = {
            text: '',
            recipient:''
        }
        _getMessages();
        function _getMessages() {
            PhoneService.getMessagesByID($stateParams.id)
            .then(function(data) {
                $scope.chat = data;
            });
        }

        function _sendMessage() {
            if ($scope.message.text) {
                PhoneService.sendMessage($scope.message.text, $scope.message.recipient);
                //$scope.message.sentMessages.push('User to ' + $scope.message.recipient + ': ' + $scope.message.text);
                $scope.message.text = '';
            }
        }
    })
    .controller('Communication.ChatCtrl', function($scope, $http, PhoneService) {
        _getConversations();
        function _getConversations() {
            PhoneService.getConversations()
            .then(function(data) {
                $scope.allConversations = data;
                $scope.recipient = 'data';
            });
        }
    });

