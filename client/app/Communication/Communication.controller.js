'use strict';

angular.module('homeNetApp')
    .controller('CommunicationCtrl', function($scope, $timeout, $http, PhoneService) {
        
        $scope.sendMessage = _sendMessage;
        $scope.message = "";

        function _sendMessage() {
        	if ($scope.messageText) {
	        	PhoneService.sendMessage($scope.messageText, $scope.receipient);
	        	$scope.message += 'User to ' + $scope.receipient + ': ' + $scope.messageText + '</span><br>';
	        	$scope.messageText = '';
	        }
        }
    });