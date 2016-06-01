var app = angular.module('app', [ 'ngTouch', 'ui.grid' ]);

app.controller('MainCtrl',	['$scope',function($scope) {
							
	var myData = [ {
		id : "1",
		Locked : "True"
	}, {
		id : "2",
		Locked : "False"
	} ]

	$scope.gridOptions = {
		enableFiltering : true,
		onRegisterApi : function(gridApi) {
			grid = gridApi;
		},
		data : myData,
		rowTemplate : '<div ng-class="{ \'grey\':grid.appScope.rowFormatter( row ) }">'
				+ '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>'
				+ '</div>',
		columnDefs : [ {
			field : 'id',
			displayName : "id",
			width : 100
		}, {
			field : 'Locked'
		} ],
	}

	// Access outside scope functions from row template
	$scope.rowFormatter = function(row) {
		console.log(row);
		return row.entity.Locked === 'True';
	};
}]);
