var app = angular.module('myModule', []);

app.controller('myController', function($scope) {
  $scope.itemArray = ['Study', 'Eat Peanut Butter', 'Watch Seinfeld'];
  $scope.addItem = function(item) {
    var newItem = item;
    $scope.itemArray.push(newItem);
  }
  $scope.removeItem = function(i) {
    $scope.itemArray.splice(i, 1);
  }
});
