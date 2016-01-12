var login = angular.module('login', []);
login.controller('LoginController', ['$scope', function($scope) {
	this.username = "admin";
	this.password = "admin";
	this.login = function() {
		alert("登录失败");
	}
}])