'use strict';

angular.module('homeNetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Media', {
        url: '/Media',
        templateUrl: 'app/Media/Media.html',
        controller: 'MediaCtrl'
      });
  });