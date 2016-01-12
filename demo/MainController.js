var app = angular.module('app', ['ng-layer', 'login']);
app.controller('MainController', ['$scope', 'layer', function($scope, layer) {
	var contentstr = '<div ng-controller="LoginController as login">' + '<label>用户名：</label><input type="text" ng-model="login.username" /><br/>' + '<label>密码：</label><input type="text" ng-model="login.password" /><br/>' + '<button ng-click="login.login()">登录</button>' + '</div>'

	this.show = function() {
		layer.open({
			type: 1,
			title: false,
			closeBtn: 1,
			shadeClose: true,
			area: ['400px'],
			content: contentstr
		});
	}
}]);