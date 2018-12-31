var app = angular.module("app", []);

app.controller("emp", ["$scope", function ($scope) {
  $scope.a = 0;
  $scope.b = 0;
  $scope.c = 0;
  $scope.d = 0;
  $scope.myObject = {
    e: 0,
    f: 0,
    g: 0
  };

  $scope.$watch("a", function (newValue, oldValue) {
    if(newValue != oldValue) {
      $scope.c = $scope.a * 3;
    }
  });

  $scope.$watchGroup(["a", "b"], function (newValue, oldValue) {
    if(newValue != oldValue) {
      $scope.d = $scope.a * $scope.b;
    }
  });

  $scope.$watch("myObject", function (newValue, oldValue) {
    if(newValue != oldValue) {
      $scope.myObject.g = +$scope.myObject.e + +$scope.myObject.f;
    }
  }, true);   // removing true here will stop watching variables 'e' and 'f' and stops updating 'g'

  $scope.$watchGroup(["myObject.e", "myObject.f"], function (newValue, oldValue) {
    if(newValue != oldValue) {
      $scope.myObject.g = parseInt($scope.myObject.e) - parseInt($scope.myObject.f);
    }
  });

  // Employee Details

  $scope.emps = [
    { empno: "1001", ename: "Jag" },
    { empno: "1002", ename: "Chat" },
    { empno: "1003", ename: "Win" },
    { empno: "1004", ename: "Dhan" }
  ];

  $scope.addEmp = function () {
    var newEmpno = 1000 * $scope.emps.length + 1;
    var newEname = "ename"+newEmpno;

    $scope.emps.push({empno: newEmpno, ename: newEname});
  };

  $scope.modify3rdEmp = function () {
    $scope.emps[2].ename = "Test";
  };

  $scope.$watch('emps', function (newValue, oldValue) {
    console.log("No. of Employees "+$scope.emps.length);  // This doesn't get fired for every addition of an employee
  }); // True or False is only for $watch

  $scope.$watchCollection('emps', function (newValue, oldValue) {
    console.log("No. of Employees "+$scope.emps.length);  // This gets fired for every new employee
  });

}]);
