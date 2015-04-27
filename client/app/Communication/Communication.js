'use strict';

angular.module('homeNetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Communication', {
        url: '/Communication',
        templateUrl: 'app/Communication/Communication.html',
        controller: 'CommunicationCtrl'
      });
  });