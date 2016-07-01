var module = angular.module('formModule', []);

module.controller('Controller', function ($scope, $http) {
	var vm = this;
	
	$http.get("http://localhost:8080/nta/api/rights/contract/1/user/u1111111af").then(
	function (response) {
		console.log("sucess");
	},function (response) {
		console.log("failed");
		console.log("error code :" + response.status)
	});
});
module.config(function ($httpProvider)
{
	// Http settings
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
})
