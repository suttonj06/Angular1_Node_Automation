'use strict';

angular.module('homeNetApp')
    .controller('CommunicationCtrl', function($scope, $timeout, $http, PhoneService) {
        
        $scope.sendMessage = _sendMessage;

        function _sendMessage() {
        	if ($scope.messageText) {
	        	PhoneService.sendMessage($scope.messageText, $scope.receipient);
	        	$scope.message += $scope.messageText + "\n";
	        	$scope.messageText = '';
	        }
        }
    });