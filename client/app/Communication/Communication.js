'use strict';

angular.module('homeNetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('conversation', {
        url: '/Communication/texts/:id',
        templateUrl: 'app/Communication/Communication.html',
        controller: 'CommunicationCtrl'
      })
      .state('Communication', {
      	url: '/Communication',
      	templateUrl: 'app/Communication/Communication.Conversation.html',
      	controller: 'Communication.ChatCtrl'
      })
  });