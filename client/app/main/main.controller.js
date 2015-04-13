'use strict';

angular.module('homeNetApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.openItem = function(index) {
      //alert("OPEN: " + $scope.controlOptions[index]);
      var page = $scope.controlOptions[index];
      $location.path('/' + page);
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
    $scope.controlOptions = [
      'HomeToday',
      'Media',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6'
    ];
  });