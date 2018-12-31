var app = angular.module("angApp", []);

app.controller("angCtrl", ["$scope", function ($scope) {
  $scope.data = [
    {v: 17, r: 0},
    {v: 24, r: 0},
    {v: 32, r: 0},
    {v: 48, r: 0}
  ];

  $scope.getTotal = function(){
    var s = 0;
    for (var i = $scope.data.length-1; i >= 0; i--) {
      var o = $scope.data[i];
      s += o.r;
    }
    return s;
  }
}]);

app.directive("message", function(){
  return {
    templateUrl: 'templates/info-msg.html',

    compile: function () {
      return function (scope, iElement, iAttributes, controller) {
        iElement.find("#btnSum").on("click", scope.btnClick);
      }
    },

    controller: function ($scope, $element, $attrs) {
      $scope.btnClick = function () {
        $scope.o.r = $scope.o.v * $scope.o.v;
        // $scope.$digest(); // with digest total won't get updated on click of square
        $scope.$apply(); // with apply total gets updated on click of square
      }
    }
  }
})
