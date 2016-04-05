var app = angular.module('app', []);

app.controller('Controller', function($scope, $filter, GetValService,
		GetValFactory, Deferred) {
	
	var vm = this;
	vm.attrib1 = "label1";
	vm.attrib2 = "label2";
	$scope.label = vm.attrib1;
	$scope.label2 = vm.attrib2;

	$scope.callService = function() {
		var srv = GetValService;
		$scope.label = srv.math($scope.monInput, srv.valuz);

		var factory = GetValFactory;
		$scope.label2 = factory.math(($scope.monInput + 1), factory.valuz);
	};

	// Fonction d'update
	$scope.update = function() {
		this.attrib2 = "truc2Prime";
		console.log(this.attrib2);
		// $scope.label = vm.attrib2;
		$scope.label = $scope.monInput;
	};

	$scope.callLogDeferred = function() {
		console.log("start : " + $filter('date')(new Date, "h:mm:ss:sss"));
		Deferred.wait(1).then(
				// function si success
				function() {
					console.log("Deferred in ctrl OK");
					console.log("end OK : "
							+ $filter('date')(new Date, "h:mm:ss:sss"));
				},
				// function si reject
				function() {
					console.log("Deferred in ctrl KO");
					console.log("end KO : "
							+ $filter('date')(new Date, "h:mm:ss:sss"));
				});
	}
});

app.factory('Deferred', function($log, $q, $rootScope) {
	return {
		wait : function(delay) {
			console.log("init timeout");
			var deferred = $q.defer();
			setTimeout(function() {
				$rootScope.$apply(function() {
					$log.log("log du timeout $log !");
					deferred.reject();
				});
			}, delay * 1000);
			return deferred.promise;
		}
	};
});
app.factory('GetValFactory', function() {
	return {
		valuz : "3333333",
		math : function(a, b) {
			var res = a * b;
			console.log(a);
			console.log(b);
			console.log(res);
			return res;
		}
	}
});

app.service('GetValService', function() {
	var srv = this;
	srv.valuz = "3333333";
	srv.math = function(a, b) {
		return a * b;
	}
});