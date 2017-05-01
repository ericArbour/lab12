var app = angular.module('myModule', []);

app.controller('myController', function($scope) {
  $scope.itemArray = ['Study', 'Eat Peanut Butter', 'Watch Seinfeld'];
  $scope.addItem = function(item) {
    if ($scope.item === "" || $scope.item === undefined) {
      return;
    }
    var newItem = item;
    $scope.itemArray.push(newItem);
    $scope.item = "";
  }
  $scope.removeItem = function(i) {
    $scope.itemArray.splice(i, 1);
  }
});
