// main.js
agGrid.initialiseAgGridWithAngular1(angular);
var app = angular.module('myApp', ["agGrid"]);
app.controller('MyCtrl', function($scope) {

	$scope.title = "Réception des appels";

	$scope.myDataInit = [ {
		idFT : "1",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000001",
		Neutr : "",
		RepFT : "KO",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000001_1',
			indice : 'a',
			idgDem : '10010010001',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'KO',
				idgRep : '10010010001',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "2",
		dateFT : "02/01/2016",
		nomFT : "2016/XML/000000002",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000002_1',
			indice : 'b',
			idgDem : '10010010002',
			designDem : 'poignée porte AG',
			qteDem : '11',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010002',
				designRep : 'poignée porte AG',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "3",
		dateFT : "03/01/2016",
		nomFT : "2016/XML/000000003",
		Neutr : "N",
		RepFT : "OK",
		dateAR1 : "02/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000003_1',
			indice : 'c',
			idgDem : '10010010003',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010003',
				designRep : 'vis A1B1',
				qteRep : '11'
			}]
		}]
	},  {
		idFT : "4",
		dateFT : "04/01/2016",
		nomFT : "2016/XML/000000004",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000004_1',
			indice : 'd',
			idgDem : '10010010004',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010004',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "5",
		dateFT : "05/01/2016",
		nomFT : "2016/XML/000000005",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000005_1',
			indice : 'f',
			idgDem : '10010010051',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010051',
				designRep : 'vis A1B1',
				qteRep : '10'
			},{
				rep : 'KO',
				idgRep : '10010010051',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		},{
			idLFT : '2016/XML/000000005_2',
			indice : 'e',
			idgDem : '10010010052',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010052',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "6",
		dateFT : "06/01/2016",
		nomFT : "2016/XML/000000006",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000006_1',
			indice : 'g',
			idgDem : '10010010006',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010006',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "7",
		dateFT : "07/01/2016",
		nomFT : "2016/XML/000000007",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000007_1',
			indice : 'a',
			idgDem : '10010010007',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010007',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "8",
		dateFT : "08/01/2016",
		nomFT : "2016/XML/000000008",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000008_1',
			indice : 'a',
			idgDem : '10010010008',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010008',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "9",
		dateFT : "09/01/2016",
		nomFT : "2016/XML/000000009",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000009_1',
			indice : 'a',
			idgDem : '10010010009',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010009',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "10",
		dateFT : "10/01/2016",
		nomFT : "2016/XML/000000010",
		Neutr : "",
		RepFT : "",
		dateAR1 : "01/01/2016",
		immat : "12345678",
		listLFT : [ {
			idLFT : '2016/XML/000000010_1',
			indice : 'a',
			idgDem : '10010010010',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010010',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	}
	];
	
	var repCellClassRules = {
		'green': "x == 'OK'",
		'red': "x == 'KO'"
	};
	
	var neutrCellClassRules = {
		'orange': "x == 'N'"
	};

	$scope.showDateFT = true;
	
	$scope.hideDateFT = function (show) {
		$scope.gridOptions.columnApi.setColumnVisible('dateFT', show);
	}
	//$scope.gridOptions.angularCompileRows = true;
	
	var checkBoxesCheked = [];
	var columnDefs = [
		{headerName : '', 
		width : 30, 
		headerCellTemplate : '<div><input type="checkbox" ng-click="checkAll" ></input></div>', 
		cellRenderer : function(params)
						{
							var html = '<input type="checkbox" ng-click="check()" ></input>';
							params.$scope.check = function (){
								//console.log("coucou");
								var selectedRows = $scope.gridOptions.api.getSelectedRows();
								var exist = false;
								selectedRows.forEach(function(selectedRow, index) {
									for (var i = 0 ; i < checkBoxesCheked.length ; i++){
										//console.log("checkBoxesCheked[i] : "+checkBoxesCheked[i]);
										if (checkBoxesCheked[i] == selectedRow.idFT){
											checkBoxesCheked.splice(i, 1);
											exist = true;
										}
									}
									if(!exist)
										checkBoxesCheked[checkBoxesCheked.length] = selectedRow.idFT;
								});
							}
							return html;
						}},
		{headerName : 'FT',
        children : [
			{headerName : "Date FT", field : 'dateFT', cellClass : 'columnFT'},
			{headerName : "FT", field : 'nomFT', cellClass : 'columnFT'},
			{headerName : "Neutr.", field : 'Neutr', cellClass : 'columnFT', cellClassRules: neutrCellClassRules},
			{headerName : "Rep. FT", field : 'RepFT', cellClass : 'columnFT', cellClassRules: repCellClassRules},
			{headerName : "Date AR1", field : 'dateAR1', cellClass : 'columnFT'},
			{headerName : "Immat.", field : 'immat', cellClass : 'columnFT'}
		]},
		{headerName: 'LFT',
        children: [
			{headerName : "LFT", field : 'idLFT', cellClass : 'columnLFT'},
			{headerName : "Indice", field : 'indice', cellClass : 'columnLFT'},
			{headerName : "IDG Dem.", field : 'idgDem', cellClass : 'columnLFT'},
			{headerName : "Désign. Dem.", field : 'designDem', cellClass : 'columnLFT'},
			{headerName : "Qté Dem.", field : 'qteDem', cellClass : 'columnLFT'}
		]},
		{headerName: 'Réponse',
        children: [
			{headerName : "Rep.", field : 'rep', cellClass : 'columnRep', cellClassRules: repCellClassRules},
			{headerName : "IDG Rep.", field : 'idgRep', cellClass : 'columnRep'},
			{headerName : "Désign. Rep.", field : 'designRep', cellClass : 'columnRep'},
			{headerName : "Qté Rep.", field : 'qteRep', cellClass : 'columnRep'}
		]},
    ];
	
	$scope.myDataSynth = [];
	angular.forEach($scope.myDataInit, function(itemOfTable) {
		angular.forEach(itemOfTable.listLFT, function(itemLFT) {
			angular.forEach(itemLFT.listRep, function(itemRep) {
				$scope.myDataSynth.push({
					idFT : itemOfTable.idFT,
					dateFT : itemOfTable.dateFT,
					nomFT : itemOfTable.nomFT,
					Neutr : itemOfTable.Neutr,
					RepFT : itemOfTable.RepFT,
					dateAR1 : itemOfTable.dateAR1,
					immat : itemOfTable.immat,
					idLFT : itemLFT.idLFT,
					indice : itemLFT.indice,
					idgDem : itemLFT.idgDem,
					designDem : itemLFT.designDem,
					qteDem : itemLFT.qteDem,
					rep : itemRep.rep,
					idgRep : itemRep.idgRep,
					designRep : itemRep.designRep,
					qteRep : itemRep.qteRep,
				});
			});
		});
	});

    $scope.gridOptions = {
        columnDefs: columnDefs,
		enableSorting: true,
		enableFilter: true,
		groupHeaders: true,
		rowHeight: 22,
		autoSizeColumns : true,
		suppressMovableColumns : true,
		angularCompileRows : true,
		rowSelection: 'single',
		onSelectionChanged: onSelectionChanged,
        rowData: $scope.myDataSynth
    };
	
	function onSelectionChanged() {
		var selectedRows = $scope.gridOptions.api.getSelectedRows();
		var selectedRowsString = '';
		selectedRows.forEach(function(selectedRow, index) {
			if (index!=0) {
				selectedRowsString += ', ';
			}
			selectedRowsString += selectedRow.idFT;
		});
		document.querySelector('#selectedRows').innerHTML = selectedRowsString;
	}
	
	$scope.showDive = true;
	$scope.cl = function(){
		for (var i = 0 ; i < checkBoxesCheked.length ; i++)
			console.log("checkBoxesCheked["+i+"] : "+checkBoxesCheked[i]);
	}
});

