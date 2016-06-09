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
	var indCheck = 0;
	var checkBoxesCheked = [];
	var columnDefs = [
		{headerName : '', 
		width : 30, 
		headerCellTemplate : '<div><input type="checkbox" ng-click="checkAll" ></input></div>', 
		cellRenderer : function(params)
						{
							var html = '<input id="'+indCheck+'" type="checkbox" ng-click="check('+indCheck+')" ></input>';
							params.$scope.check = function (ind){
								console.log("check() début : checkBoxesCheked.length : "+checkBoxesCheked.length);
								$scope.gridOptions.api.forEachNode(function (node) {
									if (node.id == ind) {
											node.setSelected(true);
										}
								});
								var selectedRows = $scope.gridOptions.api.getSelectedRows();
								var exist = false;
								selectedRows.forEach(function(selectedRow, index) {
									console.log("check() forEach");
									for (var i = 0 ; i < checkBoxesCheked.length ; i++){
										console.log("check() : checkBoxesCheked["+i+"] : "+checkBoxesCheked[i]);
										if (checkBoxesCheked[i] == selectedRow.idFT){
											checkBoxesCheked.splice(i, 1);
											exist = true;
										}
									}
									if(!exist){
										checkBoxesCheked[checkBoxesCheked.length] = selectedRow.idFT;
										var lengthMun = checkBoxesCheked.length - 1;
										console.log("check() : checkBoxesCheked["+lengthMun+"] : "+checkBoxesCheked[lengthMun]);
										console.log("check() : selectedRow.idFT : "+selectedRow.idFT);
									}
								});
								var lengthMun = checkBoxesCheked.length - 1;
								console.log("check() fin : checkBoxesCheked["+lengthMun+"] : "+checkBoxesCheked[lengthMun]);
								console.log("check() fin : checkBoxesCheked.length : "+checkBoxesCheked.length);
							}
							indCheck++;
							return html;
						}},
		{headerName : 'FT',
        children : [
			{headerName : "Date FT", field : 'dateFT', cellClass : 'columnFT', width : 80},
			{headerName : "FT", field : 'nomFT', cellClass : 'columnFT', width : 150},
			{headerName : "Neutr.", field : 'Neutr', cellClass : 'columnFT', cellClassRules: neutrCellClassRules, width : 65},
			{headerName : "Rep. FT", field : 'RepFT', cellClass : 'columnFT', cellClassRules: repCellClassRules, width : 80},
			{headerName : "Date AR1", field : 'dateAR1', cellClass : 'columnFT', width : 90},
			{headerName : "Immat.", field : 'immat', cellClass : 'columnFT', width : 70}
		]},
		{headerName: 'LFT',
        children: [
			{headerName : "LFT", field : 'idLFT', cellClass : 'columnLFT', width : 165},
			{headerName : "Indice", field : 'indice', cellClass : 'columnLFT', width : 65},
			{headerName : "IDG Dem.", field : 'idgDem', cellClass : 'columnLFT', width : 95},
			{headerName : "Désign. Dem.", field : 'designDem', cellClass : 'columnLFT', width : 150},
			{headerName : "Qté Dem.", field : 'qteDem', cellClass : 'columnLFT', width : 95}
		]},
		{headerName: 'Réponse',
        children: [
			{headerName : "Rep.", field : 'rep', cellClass : 'columnRep', cellClassRules: repCellClassRules, width : 65},
			{headerName : "IDG Rep.", field : 'idgRep', cellClass : 'columnRep', width : 95},
			{headerName : "Désign. Rep.", field : 'designRep', cellClass : 'columnRep', width : 150},
			{headerName : "Qté Rep.", field : 'qteRep', cellClass : 'columnRep', width : 95}
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
	
	$scope.prevIndice = 0;
	$scope.prevValue = '';
	$scope.tabRowColor=[{'background-color': '#ccc'}, {'background-color': 'white'}];
	$scope.gridOptions.getRowStyle = function(params) {
		var res = false;
		if ($scope.prevValue != params.data.idFT) {
			$scope.prevIndice = 1 - $scope.prevIndice;
			res = $scope.tabRowColor[$scope.prevIndice];
		} else {
			res = $scope.tabRowColor[$scope.prevIndice];
		}
		$scope.prevValue = params.data.idFT;
		return res;
	}
	
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
	$scope.testCheckbox = function(){
		for (var i = 0 ; i < checkBoxesCheked.length ; i++)
			console.log("testCheckbox() : checkBoxesCheked["+i+"] : "+checkBoxesCheked[i]);
	}
});

