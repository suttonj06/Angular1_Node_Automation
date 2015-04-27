'use strict';

angular.module('homeNetApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
    $scope.openItem = function(index) {
      //alert("OPEN: " + $scope.controlOptions[index]);
      var page = $scope.controlOptions[index];
      $location.path('/' + page);
    };
    
    $scope.controlOptions = [
      'HomeToday',
      'Media',
      'Communication'
    ];
  });