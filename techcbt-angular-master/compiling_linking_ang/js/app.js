var app = angular.module('app', []);

app.controller('msg', ['$scope', function ($scope) {

}]);

app.directive('message', function ($interpolate) {
  return {

    compile: function (tElement, tAttributes) {
      console.log(tAttributes.text+ " - In compile");
      tElement.css("border", "1px solid #c0c0c0");

      return {
        pre: function (scope, iElement, iAttributes, controller) {
          console.log(iAttributes.text+ " - In pre");
        },
        post: function (scope, iElement, iAttributes, controller) {
          console.log(iAttributes.text+ " - In post");
          if(iAttributes.text == 3) {
            iElement.css("border", "1px solid #F00");
          }
          iElement.on('click', scope.btnClick);
        }
      }
    },

    controller: function($scope, $element, $attrs) {
      var v = $interpolate($attrs.text)($scope);
      console.log(v + " - In controller");

      $scope.btnClick = function() {
        alert(v);
      }
    }
  }
});
