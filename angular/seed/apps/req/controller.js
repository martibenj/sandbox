var module = angular.module('formModule', []);

module.controller('Controller', function($scope, $log, $filter, DataHttpGetter,
		DataHttpPoster) {
	var vm = this;

	vm.trierListe = function(pData) {
		var json = $filter('json')(pData)
		console.log("json : " + json);

		var arrayed = [];
		angular.forEach(pData, function(item) {
			arrayed.push(item);
		});

		var orderTitre = $filter('orderBy')(arrayed, 'titre')
		console.log("order titre : " + orderTitre);

		var orderBylimite = $filter('limitTo')(orderTitre, 10)

		$scope.listeRecup = orderBylimite;
	};

	DataHttpGetter.listeSeries().then(

	// function si success
	function successCallback(response) {
		var reponse = response.data;
		console.log("data : \n" + reponse);
		vm.trierListe(reponse);

	}, function errorCallback(response) {
		console.log("RRHHHAAA Fait chier ça plante !");
	});

	$scope.submit = function() {
		var objToJson = $scope.fields;
		console.log("submit. titre to add : " + objToJson);

		var objJsonified = angular.toJson(objToJson);
		console.log("submit. titre to add jsonified : " + objJsonified);

		DataHttpPoster.dataPoster(objJsonified).then(
		// function si success
		function successCallback(response) {
			console.log("BG du POST" + $filter('json')(response.data));

		}, function errorCallback(response) {
			console.log("RRHHHAAA Fait chier le POST a planté !");
		});
	}
});

module.factory('DataHttpGetter', function($http) {
	var func = function() {
		return $http({
			method : 'GET',
			// url : "https://httpbin.org/get"
			url : "http://localhost:8888/bookstore/rs/series/"
		});
	};
	return {
		listeSeries : func
	};
});

module.factory('DataHttpPoster', function($http) {
	var func = function(pDataToPost) {
		return $http({
			method : 'POST',
			url : "http://localhost:8888/bookstore/rs/series/",
			data : pDataToPost
		});
	};
	return {
		dataPoster : func
	};
});