// main.js
var app = angular.module('myApp', [ 'ui.grid' ]);
var grid;
app.controller('MyCtrl', function($scope){
	$scope.title = "POC NTA avec composant ui-grid";

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
	},
	{
		idFT : "FT3",
		listLFT : [ {
			idLFT : 'LFT1-de-la-FT3',
			descLFT : 'descLFT1'
		}, {
			idLFT : 'LFT2-de-la-FT3',
			descLFT : 'descLFT2'
		} ]
	}];

	console.log('myDataInit:'); 
	console.log($scope.myDataInit);

	$scope.gridOptions = {
		data : 'myDataTraitee',
		multiSelect : false,
		rowTemplate : '<div ng-class="{\'gray\': grid.appScope.rowFormatter(row) }"> <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader}"  ui-grid-cell></div></div>',
			
		columnDefs : [{
			field : 'idFT',
			displayName : 'Num FT'
		}, {
			field : 'idLFT',
			displayName : 'Num LFT'
		}]
	};
	
	// Access outside scope functions from row template
	$scope.cpt = 0;
	$scope.prevValue = '';
	$scope.prevRes = true;
	
	$scope.compteur = function(row) {
		$scope.cpt++;
		console.log($scope.cpt);
	}

	$scope.rowFormatter = function(row) {
		$scope.cpt++
		var res =false;
		console.log(row)
		if ($scope.prevValue != row.entity.idFT) {
			res = !$scope.prevRes;
		}
		else
		{
			res = $scope.prevRes;
		}
		$scope.prevValue = row.entity.idFT;
		$scope.prevRes = res;
		
		console.log($scope.cpt);
		return res;
	};

	$scope.myDataTraitee = [];

	// Mise en forme de la data à afficher dans le tableau
	angular.forEach($scope.myDataInit, function(itemOfTable) {
		//console.log('itemOfTable.listLFT:' + itemOfTable.listLFT);
		
		angular.forEach(itemOfTable.listLFT, function(itemLFT, numRang) {
			//console.log('itemLFT.idLFT:' + itemLFT.idLFT);
			
			$scope.myDataTraitee.push({
				idFT : itemOfTable.idFT,
				idLFT : itemLFT.idLFT
			});
		});
	});


	console.log('myDataTraitee:'); 
	console.log($scope.myDataTraitee);
});
