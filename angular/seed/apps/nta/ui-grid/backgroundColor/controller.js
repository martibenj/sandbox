// main.js
var app = angular.module('myApp', ['ngTouch', 'ui.grid', 'ui.grid.selection']);
app.controller('MyCtrl', function($scope) {

	$scope.title = "POC NTA avec composant ui-grid";

	$scope.myDataInit = [ {
		idFT : "1",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000001",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
		listLFT : [ {
			idLFT : '2016/XML/000000001_1',
			indice : 'a',
			idgDem : '10010010001',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010001',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "2",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000002",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
		listLFT : [ {
			idLFT : '2016/XML/000000002_1',
			indice : 'a',
			idgDem : '10010010002',
			designDem : 'poignée porte AG',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010002',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "3",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000003",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
		listLFT : [ {
			idLFT : '2016/XML/000000003_1',
			indice : 'a',
			idgDem : '10010010003',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010003',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "4",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000004",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
		listLFT : [ {
			idLFT : '2016/XML/000000004_1',
			indice : 'a',
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
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000005",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
		listLFT : [ {
			idLFT : '2016/XML/000000005_1',
			indice : 'a',
			idgDem : '10010010005',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010005',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		},{
			idLFT : '2016/XML/000000005_2',
			indice : 'a',
			idgDem : '10010010005',
			designDem : 'vis A1B1',
			qteDem : '10',
			listRep : [{
				rep : 'OK',
				idgRep : '10010010005',
				designRep : 'vis A1B1',
				qteRep : '10'
			}]
		}]
	},  {
		idFT : "6",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000006",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
		listLFT : [ {
			idLFT : '2016/XML/000000006_1',
			indice : 'a',
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
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000007",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
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
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000008",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "234-CYA-7",
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
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000009",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
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
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000010",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
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
	}, 
	
	];

	$scope.gridOptions = {
		data : 'myDataTraitee',
		multiSelect : false,
		enableRowSelection: true,
		enableFullRowSelection:true,
		enableRowHeaderSelection: false,
		//modifierKeysToMultiSelect: false,
		//noUnselect: true,
		columnDefs : [
			{field: 'idFT', visible : false},
			{field: 'dateFT',	width : 84,		cellClass : 'columnFT',	headerCellClass : 'hColumnFT'},
			{field: 'nomFT',	width : 160,	cellClass : 'columnFT', headerCellClass : 'hColumnFT'},
			{field: 'Neutr',	width : 35, 	cellClass : 'columnFT', headerCellClass : 'hColumnFT'},
			{field: 'RepFT',	width : 35, 	cellClass : 'columnFT', headerCellClass : 'hColumnFT'},
			{field: 'dateAR1',	width : 84, 	cellClass : 'columnFT', headerCellClass : 'hColumnFT'},
			{field: 'immat',	width : 86, 	cellClass : 'columnFT', headerCellClass : 'hColumnFT'},
			{field: 'idLFT',	width : 176,	cellClass : 'columnLFT', headerCellClass : 'hColumnLFT'},
			{field: 'indice',	width : 18, 	cellClass : 'columnLFT', headerCellClass : 'hColumnLFT'},
			{field: 'idgDem',	width : 99, 	cellClass : 'columnLFT', headerCellClass : 'hColumnLFT'},
			{field: 'designDem', 				cellClass : 'columnLFT', headerCellClass : 'hColumnLFT'},
			{field: 'qteDem',	width : 35, 	cellClass : 'columnLFT', headerCellClass : 'hColumnLFT'},
			{field: 'rep',		width : 35, 	cellClass : 'columnRep', headerCellClass : 'hColumnRep'},
			{field: 'idgRep',	width : 99, 	cellClass : 'columnRep', headerCellClass : 'hColumnRep'},
			{field: 'designRep', 				cellClass : 'columnRep', headerCellClass : 'hColumnRep'},
			{field: 'qteRep',	width : 35, 	cellClass : 'columnRep', headerCellClass : 'hColumnRep'}
		]
	};
$scope.gridOptions.onRegisterApi = function( gridApi ) {
    $scope.gridApi = gridApi;
  };
	$scope.myDataTraitee = [];

	angular.forEach($scope.myDataInit, function(itemOfTable) {
		angular.forEach(itemOfTable.listLFT, function(itemLFT) {
			angular.forEach(itemLFT.listRep, function(itemRep) {
				$scope.myDataTraitee.push({
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
	console.log('myDataTraitee:' + $scope.myDataTraitee);
	
	
	window.onload = function(){
		var arrayLignes = document.getElementsByClassName('ui-grid-row');
		var i=0;
		console.log("arrayLignes : "+arrayLignes);
		console.log("i : "+i);
		console.log("arrayLignes.length	: "+arrayLignes.length);
		
		angular.forEach($scope.myDataTraitee, function(itemOfTab) {
		console.log("itemOfTab.idFT : "+itemOfTab.idFT);
			var cells = arrayLignes[i].getElementsByClassName('ui-grid-cell');
			if(itemOfTab.idFT%2 == 0){
				arrayLignes[i].style.backgroundColor = "#dddddd";
				
				for (var j = 0 ; j < cells.length ; j++){
					cells[j].style.backgroundColor = "#dddddd";
				}
				
			}else{
				arrayLignes[i].style.backgroundColor = "white";
				
				for (var k = 0 ; k < cells.length ; k++){
					cells[k].style.backgroundColor = "white";
				}
				
			}
			i++;
		});
	}
	
});

