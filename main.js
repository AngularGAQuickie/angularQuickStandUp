//sets up a global space for angular modules
var app = angular.module("myApp", []);

// $rootscope is the highest level scope (think like a global scope)
//all $scopes are children of the $rootscope
app.run(function($rootScope) {
  $rootScope.person = {
  	name: "Ethan"
  };
});

//child of the $rootScope
app.controller('MyController', function($scope) {
  $scope.person = {
  	name: "Jackie"
  };
});

// app.controller('MyController', function($scope) {
// 	$scope.person = {
// 	  name: "Heather"

// 	};  
// });
