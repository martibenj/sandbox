var module = angular.module('formModule', [ "ngMessages" ]);

module.controller('Controller', function($scope, $log, $filter, DataSelect) {
	var vm = this;

	$scope.getAvailableColors = function() {
		return DataSelect.listeColor;
	};

	$scope.submit = function() {
		var data = $filter('json')($scope.fields);
		$scope.resultat = data;
	};
});

module.factory('DataSelect', function() {
	return {
		listeColor : [ 'Bleu', 'Vert', 'Rouge' ]
	};
});