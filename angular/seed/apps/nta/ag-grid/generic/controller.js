// main.js
agGrid.initialiseAgGridWithAngular1(angular);
var app = angular.module('myApp', [ "agGrid" ]);

app.controller('MyCtrl', function($scope) {
	$scope.title = "POC NTA avec composant ag-grid";

	$scope.myDataInit = [ {
		idFT : "FT1",
		listLFT : [ {
			idLFT : 'LFT1-de-la-FT1',
			descLFT : 'descLFT1'
		}, {
			idLFT : 'LFT2-de-la-FT1',
			descLFT : 'descLFT2'
		} ]
	}, {
		idFT : "FT2",
		listLFT : [ {
			idLFT : 'LFT1-de-la-FT2',
			descLFT : 'descLFT1'
		}, {
			idLFT : 'LFT2-de-la-FT2',
			descLFT : 'descLFT2'
		} ]
	}, {
		idFT : "FT3",
		listLFT : [ {
			idLFT : 'LFT1-de-la-FT3',
			descLFT : 'descLFT1'
		}, {
			idLFT : 'LFT2-de-la-FT3',
			descLFT : 'descLFT2'
		} ]
	} ];

	console.log('myDataInit:');
	console.log($scope.myDataInit);

	var columnDefs = [ {
		headerName : "Num FT",
		field : "idFT",
		cellRenderer : function(params) {
			// console.log('inside cell FT');
			// console.log(params.value)
			// console.log('----------');
//			$scope.compteur(params.value)
//			console.log('idFT');
//			console.log($scope.cpt);
			return params.value.toLocaleString();
		},
		filter : 'set',
		filterParams : {
			cellRenderer : function(params) {
				// console.log('inside filter FT');
				// console.log(params.value)
				// console.log('----------');
				return params.value.toLocaleString();
			}
		}
	}, {
		headerName : "Num LFT",
		field : "idLFT",
		cellRenderer : function(params) {
			// console.log('inside cell LFT');
			// console.log(params.value)
			// console.log('----------');
//			$scope.compteur(params.value)
//			console.log('idLFT');
//			console.log($scope.cpt);
			return params.value.toLocaleString();
		},
		filter : 'set',
		filterParams : {
			cellRenderer : function(params) {
				// console.log('inside filter LFT');
				// console.log(params.value)
				// console.log('----------');
				return params.value.toLocaleString();
			}
		}
	} ];

	// Access outside scope functions from row template

	var myDataTraitee = [];

	// Mise en forme de la data à afficher dans le tableau
	angular.forEach($scope.myDataInit, function(itemOfTable) {
		// console.log('itemOfTable.listLFT:' + itemOfTable.listLFT);
		angular.forEach(itemOfTable.listLFT, function(itemLFT, numRang) {
			// console.log('itemLFT.idLFT:' + itemLFT.idLFT);
			myDataTraitee.push({
				idFT : itemOfTable.idFT,
				idLFT : itemLFT.idLFT
			});
		});
	});

	$scope.gridOptions = {
		columnDefs : columnDefs,
		rowData : myDataTraitee,
		enableColResize : true,
		enableFilter : true
	};

	$scope.cpt = 0;
	$scope.prevIndice = 0;
	$scope.prevValue = '';
	$scope.tabRowColor=[{'background-color': 'gray'}, {'background-color': 'white'}];
	$scope.gridOptions.getRowStyle = function(params) {
		var res = false;
		console.log("params.data.idFT")
		console.log(params.data.idFT)
		if ($scope.prevValue != params.data.idFT) {
			$scope.prevIndice = 1 - $scope.prevIndice;
			res = $scope.tabRowColor[$scope.prevIndice]
			console.log("différent:")
			console.log(res)
		} else {
			res = $scope.tabRowColor[$scope.prevIndice]
			console.log("pareil:")
			console.log(res)
		}
		$scope.prevValue = params.data.idFT;
		return res;
	}

	console.log('myDataTraitee:');
	console.log(myDataTraitee);

	$scope.compteur = function(param) {
		$scope.cpt++;
		console.log($scope.cpt);
	}

	$scope.rowFormatter = function(param) {
		$scope.cpt++
		var res = false;

		if ($scope.prevValue != param.entity.idFT) {
			res = !$scope.prevRes;
		} else {
			res = $scope.prevRes;
		}
		$scope.prevValue = param.entity.idFT;
		$scope.prevRes = res;

		console.log($scope.cpt);
		return res;
	};

});

// $scope.gridOptions = {
// data : 'myDataTraitee',
// multiSelect : false,
// rowTemplate : '<div ng-class="{\'gray\': grid.appScope.rowFormatter(row) }">
// <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track
// by col.colDef.name" class="ui-grid-cell" ng-class="{
// \'ui-grid-row-header-cell\': col.isRowHeader}" ui-grid-cell></div></div>',
// columnDefs : [{
// field : 'idFT',
// displayName : 'Num FT'
// }, {
// field : 'idLFT',
// displayName : 'Num LFT'
// }]
// };

