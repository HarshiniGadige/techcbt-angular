var app = angular.module("app", []);

app.controller("addCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
  $scope.a = 1;
  $scope.b = 2;
  $scope.sum = 0;
  $scope.calc = function () {
    $scope.sum = +$scope.a + +$scope.b;
  }

}]);

var buttonClick = function () {
  var $scope = angular.element($("#div1")).scope();

// 1st way

  $scope.sum = +$scope.a + +$scope.b;
  $scope.$apply();  // without $apply the output won't be reflected in the DOM
  // $apply can be used only when you're only outside the angular context

// 2nd way

  $scope.$apply(function(){
    $scope.sum = +$scope.a + +$scope.b;
  })
}
