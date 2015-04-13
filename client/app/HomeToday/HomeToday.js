'use strict';

angular.module('homeNetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('HomeToday', {
        url: '/HomeToday',
        templateUrl: 'app/HomeToday/HomeToday.html',
        controller: 'HomeTodayCtrl'
      });
  });