var sampleApp = angular.module('sampleApp', []);
console.log(sampleApp);

sampleApp.controller('mainController', function($scope) {
	var that = this;
	this.users = [{"name": "mike"}, {"name": "vanessa"}, {"name": "brittney"}];
	this.hello = function() {
		console.log(this);
		console.log(that);
		console.log(that.users[0].name);
	}
	this.hello();
	console.log(this);
});