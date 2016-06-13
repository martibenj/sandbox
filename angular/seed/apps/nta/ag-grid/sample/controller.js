// main.js
agGrid.initialiseAgGridWithAngular1(angular);
var app = angular.module('myApp', ["agGrid"]);
app.controller('MyCtrl', function($scope) {
	
	
	/*-----------------------------------------*/
	/*----------- RECEPTION APPELS ------------*/
	/*-----------------------------------------*/
	
	/*-- Titre de la page*/
	$scope.title = "Réception des appels";

	/*-- Données complètes*/
	$scope.myDataInit = [ {
		idFT : "1",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000001",
		lock : "", Neutr : "",
		RepFT : "KO",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '1', nomLFT : '', nomLFT : '2016/XML/000000001_1',
			indice : 'a',
			nno : '', cf : '', rf : '', idgDem : '10010010001',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'KO',
				erreur : '', idgRep : '10010010001',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "2",
		dateFT : "02/01/2016",
		nomFT : "2016/XML/000000002",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '2', nomLFT : '', nomLFT : '2016/XML/000000002_1',
			indice : 'b',
			nno : '', cf : '', rf : '', idgDem : '10010010002',
			designDem : 'poignée porte AG',
			classe : '', casse : '', qteDem : '11',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010002',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'poignée porte AG',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "3",
		dateFT : "03/01/2016",
		nomFT : "2016/XML/000000003",
		Neutr : "N",
		RepFT : "OK",
		cause : "", dateAR1 : "02/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '3', nomLFT : '', nomLFT : '2016/XML/000000003_1',
			indice : 'c',
			nno : '', cf : '', rf : '', idgDem : '10010010003',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010003',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '11'
			}]
		}]
	},  {
		idFT : "4",
		dateFT : "04/01/2016",
		nomFT : "2016/XML/000000004",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '4', nomLFT : '', nomLFT : '2016/XML/000000004_1',
			indice : 'd',
			nno : '', cf : '', rf : '', idgDem : '10010010004',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010004',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "5",
		dateFT : "05/01/2016",
		nomFT : "2016/XML/000000005",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '5', nomLFT : '', nomLFT : '2016/XML/000000005_1',
			indice : 'f',
			nno : '', cf : '', rf : '', idgDem : '10010010051',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010051',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			},{
				rep : 'KO',
				erreur : '', idgRep : '10010010051',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		},{
			alerte : "", idLFT : '6', nomLFT : '', nomLFT : '2016/XML/000000005_2',
			indice : 'e',
			nno : '', cf : '', rf : '', idgDem : '10010010052',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010052',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "6",
		dateFT : "06/01/2016",
		nomFT : "2016/XML/000000006",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '7', nomLFT : '', nomLFT : '2016/XML/000000006_1',
			indice : 'g',
			nno : '', cf : '', rf : '', idgDem : '10010010006',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010006',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "7",
		dateFT : "07/01/2016",
		nomFT : "2016/XML/000000007",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '8', nomLFT : '', nomLFT : '2016/XML/000000007_1',
			indice : 'a',
			nno : '', cf : '', rf : '', idgDem : '10010010007',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010007',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "8",
		dateFT : "08/01/2016",
		nomFT : "2016/XML/000000008",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '9', nomLFT : '', nomLFT : '2016/XML/000000008_1',
			indice : 'a',
			nno : '', cf : '', rf : '', idgDem : '10010010008',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010008',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "9",
		dateFT : "09/01/2016",
		nomFT : "2016/XML/000000009",
		lock : "", Neutr : "",
		RepFT : "OK",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '10', nomLFT : '', nomLFT : '2016/XML/000000009_1',
			indice : 'a',
			nno : '', cf : '', rf : '', idgDem : '10010010009',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010009',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	},  {
		idFT : "10",
		dateFT : "10/01/2016",
		nomFT : "2016/XML/000000010",
		lock : "", Neutr : "",
		RepFT : "",
		cause : "", dateAR1 : "01/01/2016",
		parc : "", site : "", vehi : "", immat : "12345678",
		opex : "", DemCompl : "", tranche : "", listLFT : [ {
			alerte : "", idLFT : '11', nomLFT : '', nomLFT : '2016/XML/000000010_1',
			indice : 'a',
			nno : '', cf : '', rf : '', idgDem : '10010010010',
			designDem : 'vis A1B1',
			classe : '', casse : '', qteDem : '10',
			rr : '', listRep : [{
				rep : 'OK',
				erreur : '', idgRep : '10010010010',
				cfRep : '', rfRep : '', nnoRep : '', designRep : 'vis A1B1',
				qteRep : '10', mag : '10',stock : '',ov : '',prix : '',ComInt : '',trait : ''
			}]
		}]
	}
	];
	
	/*-- Régle de style pour les cellules avec des réponses, Vert pour "OK" et rouge pour "KO"*/
	var repCellClassRules = {
		'green': "x == 'OK'",
		'red': "x == 'KO'"
	};
	
	/*-- Régle de style pour les cellules avec neutralisation, orange pour "N"*/
	var neutrCellClassRules = {
		'orange': "x == 'N'"
	};

	/*-- Booleans d'apparition/cache de la colonne Date FT*/
	$scope.showDateFT = true;
	
	/*-- Fonction d'apparition/cache de la colonne Date FT*/
	$scope.hideDateFT = function (show) {
		$scope.gridOptions.columnApi.setColumnVisible('dateFT', show);
	}
	
	var indCheck = 0;
	var checkBoxesCheked = [];
	
	/*-- Liste des entêtes des colonnes du tableau de synthèse*/
	var columnDefs = [
		/*-- Colonne de checkBoxes*/
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
		/*-- Colonnes de FT*/
		{headerName : 'FT',
        children : [
			{headerName : "Date FT", field : 'dateFT', cellClass : 'columnFT', width : 80},
			{headerName : "FT", field : 'nomFT', cellClass : 'columnFT', width : 150},
			{headerName : "Lock", field : 'lock', cellClass : 'columnFT', width : 55},
			{headerName : "Neutr.", field : 'Neutr', cellClass : 'columnFT', cellClassRules: neutrCellClassRules, width : 65},
			{headerName : "Rep. FT", field : 'RepFT', cellClass : 'columnFT', cellClassRules: repCellClassRules, width : 80},
			{headerName : "Date AR1", field : 'dateAR1', cellClass : 'columnFT', width : 90},
			{headerName : "Immat.", field : 'immat', cellClass : 'columnFT', width : 70}
		]},
		/*-- Colonnes de LFT*/
		{headerName: 'LFT',
        children: [
			{headerName : "Alerte", field : 'alerte', cellClass : 'columnLFT', width : 65},
			{headerName : "LFT", field : 'nomLFT', cellClass : 'columnLFT', width : 165},
			{headerName : "Indice", field : 'indice', cellClass : 'columnLFT', width : 65},
			{headerName : "IDG Dem.", field : 'idgDem', cellClass : 'columnLFT', width : 95},
			{headerName : "Désign. Dem.", field : 'designDem', cellClass : 'columnLFT', width : 150},
			{headerName : "Qté Dem.", field : 'qteDem', cellClass : 'columnLFT', width : 95}
		]},
		/*-- Colonnes de Réponse*/
		{headerName: 'Réponse',
        children: [
			{headerName : "Rep.", field : 'rep', cellClass : 'columnRep', cellClassRules: repCellClassRules, width : 65},
			{headerName : "IDG Rep.", field : 'idgRep', cellClass : 'columnRep', width : 95},
			{headerName : "Désign. Rep.", field : 'designRep', cellClass : 'columnRep', width : 150},
			{headerName : "Qté Rep.", field : 'qteRep', cellClass : 'columnRep', width : 95}
		]},
    ];
	
	/*-- Création de la liste qui remplira le tableau de synthèse*/
	$scope.myDataSynth = [];
	angular.forEach($scope.myDataInit, function(itemOfTable) {
		angular.forEach(itemOfTable.listLFT, function(itemLFT) {
			angular.forEach(itemLFT.listRep, function(itemRep) {
				$scope.myDataSynth.push({
					idFT : itemOfTable.idFT,
					dateFT : itemOfTable.dateFT,
					nomFT : itemOfTable.nomFT,
					lock : itemOfTable.lock,
					Neutr : itemOfTable.Neutr,
					RepFT : itemOfTable.RepFT,
					dateAR1 : itemOfTable.dateAR1,
					immat : itemOfTable.immat,
					alerte : itemLFT.alerte,
					nomLFT : itemLFT.nomLFT,
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

	/*-- Options du tableau de synthèse*/
    $scope.gridOptions = {
        columnDefs: columnDefs,	/*-- Les entêtes des colonnes*/
		enableSorting: true, 	/*-- Possibilité de trier une colonne*/
		enableFilter: true, 	/*-- Possibilité de filtrer une colonne*/
		groupHeaders: true, 	/*-- Possibilité de grouper les colonnes dans l'entête*/
		rowHeight: 22, 			/*-- Hauteur des lignes*/
		suppressMovableColumns : true,	/*-- Empeche les colonne d'etre reorganisé*/
		angularCompileRows : true, 		/*-- Permet d'utiliser angularjs dans une ligne/cellule*/
		rowSelection: 'single', 		/*-- Possibilité de selectionner une seule ligne a la fois*/
		onSelectionChanged: onSelectionChanged, /*-- Fonction apelé a la selection d'une ligne*/
        rowData: $scope.myDataSynth 	/*-- Données du tableau*/
    };
	
	$scope.myDataFT = [];
	$scope.myDataLFT = [];
	$scope.myDataRep = [];
	
	/*-- Fonction appelé lors d'un clic sur une ligne du tableau de synthèse*/
	function onSelectionChanged() {
		//console.log("onSelectionChanged() : $scope.myDataFT.length : "+$scope.myDataFT.length);
		
		/*-- Vidage des tableaux en fonction de la ligne cliqué dans le tableau de synthèse*/
		for (var i = $scope.myDataFT.length - 1 ; i >= 0 ; i--){
			//console.log("onSelectionChanged() 1 : i : "+i+" length : "+$scope.myDataFT.length);
			$scope.myDataFT.splice(i,1);
			//console.log("onSelectionChanged() 2 : i : "+i+" length : "+$scope.myDataFT.length);
		}
			
		for (var j = $scope.myDataLFT.length - 1 ; j >= 0 ; j--){
			$scope.myDataLFT.splice(j,1);
		}
			
		for (var k = $scope.myDataRep.length - 1 ; k >= 0 ; k--){
			$scope.myDataRep.splice(k,1);
		}
		
		//console.log("onSelectionChanged() : $scope.myDataFT.length : "+$scope.myDataFT.length);
		var indFT = 0;
		var indLFT = 0;
		var selectedRows = $scope.gridOptions.api.getSelectedRows();
		var selectedRowsString = '';
		
		/*-- Remplissage des tableaux de détail en fonction de la ligne cliqué dans le tableau de synthèse*/
		selectedRows.forEach(function(selectedRow, index) {
			angular.forEach($scope.myDataInit, function(itemOfTable) {
				angular.forEach(itemOfTable.listLFT, function(itemLFT) {
					angular.forEach(itemLFT.listRep, function(itemRep) {
						if (selectedRow.idFT == itemOfTable.idFT){
							if (itemOfTable.idFT != indFT){
								$scope.myDataFT.push({
									idFT : 		itemOfTable.idFT,
									dateFT : 	itemOfTable.dateFT,
									nomFT : 	itemOfTable.nomFT,
									lock : 		itemOfTable.lock,
									Neutr : 	itemOfTable.Neutr,
									RepFT : 	itemOfTable.RepFT,
									cause : 	itemOfTable.cause,
									dateAR1 :	itemOfTable.dateAR1,
									parc : 		itemOfTable.parc,
									site : 		itemOfTable.site,
									vehi : 		itemOfTable.vehi,
									immat : 	itemOfTable.immat,
									opex : 		itemOfTable.opex,
									DemCompl : 	itemOfTable.DemCompl,
									tranche : 	itemOfTable.tranche,
								});
							}
								
							if (itemLFT.idLFT != indLFT){
								$scope.myDataLFT.push({
									idLFT : itemLFT.idLFT,
									alerte : itemLFT.alerte,
									nomLFT : itemLFT.nomLFT,
									indice : itemLFT.indice,
									nno : itemLFT.nno,
									cf : itemLFT.cf,
									rf : itemLFT.rf,
									idgDem : itemLFT.idgDem,
									designDem : itemLFT.designDem,
									classe : itemLFT.classe,
									casse : itemLFT.casse,
									qteDem : itemLFT.qteDem,
									rr : itemLFT.rr,
								});
							}
							
							$scope.myDataRep.push({
								idLFT : itemLFT.idLFT,
								nomLFT : itemLFT.nomLFT,
								rep : itemRep.rep,
								erreur : itemRep.erreur,
								idgRep : itemRep.idgRep,
								cfRep : itemRep.cfRep,
								rfRep : itemRep.rfRep,
								nnoRep : itemRep.nnoRep,
								designRep : itemRep.designRep,
								qteRep : itemRep.qteRep,
								mag : itemRep.mag,
								stock : itemRep.stock,
								ov : itemRep.ov,
								prix : itemRep.prix,
								ComInt : itemRep.ComInt,
								trait : itemRep.trait,
							});
							indFT = itemOfTable.idFT;
							indLFT = itemLFT.idLFT;
						}
					});
				});
			});
		});
		$scope.ftGridOptions.api.setRowData($scope.myDataFT);
		$scope.lftGridOptions.api.setRowData($scope.myDataLFT);
		$scope.repGridOptions.api.setRowData($scope.myDataRep);
		$scope.ftGridOptions.api.sizeColumnsToFit();
		$scope.lftGridOptions.api.sizeColumnsToFit();
		$scope.repGridOptions.api.sizeColumnsToFit();
	}
	
	$scope.testCheckbox = function(){
		for (var i = 0 ; i < checkBoxesCheked.length ; i++)
			console.log("testCheckbox() : checkBoxesCheked["+i+"] : "+checkBoxesCheked[i]);
	}
	
	
	/*-------------------------------*/
	/*----------- DETAIL ------------*/
	/*-------------------------------*/
	
	/*-- Liste des entêtes des colonnes du tableau de détail d'un FT*/
	var ftColumnDefs = [
		{headerName : "Date FT", field : 'dateFT', cellClass : 'columnFT', width : 80},
		{headerName : "FT", field : 'nomFT', cellClass : 'columnFT', width : 150},
		{headerName : "Lock", field : 'lock', cellClass : 'columnFT', width : 55},
		{headerName : "Neutr.", field : 'Neutr', cellClass : 'columnFT', cellClassRules: neutrCellClassRules, width : 65},
		{headerName : "Rep. FT", field : 'RepFT', cellClass : 'columnFT', cellClassRules: repCellClassRules, width : 80},
		{headerName : "Cause", field : 'cause', cellClass : 'columnFT', width : 90},
		{headerName : "Date AR1", field : 'dateAR1', cellClass : 'columnFT', width : 90},
		{headerName : "Parc", field : 'parc', cellClass : 'columnFT', width : 90},
		{headerName : "Site", field : 'site', cellClass : 'columnFT', width : 90},
		{headerName : "Véhi.", field : 'vehi', cellClass : 'columnFT', width : 90},
		{headerName : "Immat.", field : 'immat', cellClass : 'columnFT', width : 70},
		{headerName : "Opex", field : 'opex', cellClass : 'columnFT', width : 70},
		{headerName : "Dem. Compl.", field : 'DemCompl', cellClass : 'columnFT', width : 110},
		{headerName : "Tranche", field : 'tranche', cellClass : 'columnFT', width : 80}
	];
	
	/*-- Liste des entêtes des colonnes du tableau de détail d'un LFT*/
	var lftColumnDefs = [
		{headerName : "Alerte", field : 'alerte', cellClass : 'columnLFT', width : 65},
		{headerName : "LFT", field : 'nomLFT', cellClass : 'columnLFT', width : 165},
		{headerName : "Indice", field : 'indice', cellClass : 'columnLFT', width : 65},
		{headerName : "NNO", field : 'nno', cellClass : 'columnLFT', width : 65},
		{headerName : "CF", field : 'cf', cellClass : 'columnLFT', width : 65},
		{headerName : "RF", field : 'rf', cellClass : 'columnLFT', width : 65},
		{headerName : "IDG Dem.", field : 'idgDem', cellClass : 'columnLFT', width : 95},
		{headerName : "Désign. Dem.", field : 'designDem', cellClass : 'columnLFT', width : 150},
		{headerName : "Classe", field : 'classe', cellClass : 'columnLFT', width : 95},
		{headerName : "Casse", field : 'casse', cellClass : 'columnLFT', width : 95},
		{headerName : "Qté Dem.", field : 'qteDem', cellClass : 'columnLFT', width : 95},
		{headerName : "RR", field : 'rr', cellClass : 'columnLFT', width : 95}
	];

	/*-- Liste des entêtes des colonnes du tableau de détail d'une réponse*/
	var repColumnDefs = [
		{headerName : "LFT", field : 'nomLFT', cellClass : 'columnLFT', width : 165},
		{headerName : "Rep.", field : 'rep', cellClass : 'columnRep', cellClassRules: repCellClassRules, width : 65},
		{headerName : "Erreur", field : 'erreur', cellClass : 'columnRep', width : 65},
		{headerName : "IDG Rep.", field : 'idgRep', cellClass : 'columnRep', width : 95},
		{headerName : "CF Rep.", field : 'cfRep', cellClass : 'columnRep', width : 95},
		{headerName : "RF Rep.", field : 'rfRep', cellClass : 'columnRep', width : 95},
		{headerName : "NNO Rep.", field : 'nnoRep', cellClass : 'columnRep', width : 95},
		{headerName : "Désign. Rep.", field : 'designRep', cellClass : 'columnRep', width : 150},
		{headerName : "Qté Rep.", field : 'qteRep', cellClass : 'columnRep', width : 95},
		{headerName : "Mag", field : 'mag', cellClass : 'columnRep', width : 95},
		{headerName : "Stock", field : 'stock', cellClass : 'columnRep', width : 95},
		{headerName : "OV", field : 'ov', cellClass : 'columnRep', width : 95},
		{headerName : "Prix", field : 'prix', cellClass : 'columnRep', width : 95},
		{headerName : "Com. Int.", field : 'ComInt', cellClass : 'columnRep', width : 95},
		{headerName : "Trait.", field : 'trait', cellClass : 'columnRep', width : 95}
	];
	
	/*-- Options du tableau de détail d'un FT*/
    $scope.ftGridOptions = {
        columnDefs: ftColumnDefs,
		enableSorting: true,
		enableFilter: true,
		groupHeaders: true,
		rowHeight: 22,
		autoSizeColumns : true,
		suppressMovableColumns : true,
        rowData: $scope.myDataFT
    };
	
	/*-- Options du tableau de détail d'un LFT*/
    $scope.lftGridOptions = {
        columnDefs: lftColumnDefs,
		enableSorting: true,
		enableFilter: true,
		groupHeaders: true,
		rowHeight: 22,
		autoSizeColumns : true,
		suppressMovableColumns : true,
        rowData: $scope.myDataLFT
    };
	
	/*-- Options du tableau de détail d'une Réponse*/
    $scope.repGridOptions = {
        columnDefs: repColumnDefs,
		enableSorting: true,
		enableFilter: true,
		groupHeaders: true,
		rowHeight: 22,
		autoSizeColumns : true,
		suppressMovableColumns : true,
        rowData: $scope.myDataRep
    };
	
	/*-- Colorisation des lignes du tableau de synthèse en fonction de l'id d'un FT*/
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
	
	/*-- Colorisation des lignes du tableau de détail d'une Réponse en fonction de l'id d'un LFT*/
	$scope.repGridOptions.getRowStyle = function(params) {
		var res = false;
		if ($scope.prevValue != params.data.idLFT) {
			$scope.prevIndice = 1 - $scope.prevIndice;
			res = $scope.tabRowColor[$scope.prevIndice];
		} else {
			res = $scope.tabRowColor[$scope.prevIndice];
		}
		$scope.prevValue = params.data.idLFT;
		return res;
	}
	
	/*-- Colorisation des lignes du tableau de détail d'un LFT en fonction de l'id d'un LFT*/
	$scope.lftGridOptions.getRowStyle = function(params) {
		var res = false;
		if ($scope.prevValue != params.data.idLFT) {
			$scope.prevIndice = 1 - $scope.prevIndice;
			res = $scope.tabRowColor[$scope.prevIndice];
		} else {
			res = $scope.tabRowColor[$scope.prevIndice];
		}
		$scope.prevValue = params.data.idLFT;
		return res;
	}
	
	/*-- Boolean d'apparition/cache des tableaux de détails FT et LFT*/
	$scope.showGridFT = false;
	
	/*-- Fonction d'apparition/cache des tableaux de détails FT et LFT*/
	$scope.fctshowGridFT = function(show){
		$scope.showGridFT = !show;
		$scope.ftGridOptions.api.sizeColumnsToFit();
		$scope.lftGridOptions.api.sizeColumnsToFit();
	}
	
	
	/*--------------------------------*/
	/*----------- ANALYSE ------------*/
	/*--------------------------------*/
	
	/*-- Données du tableau ressource de la partie Analyse*/
	$scope.myDataAnalyse = [{
		id : '1', Type : 'IDG', 
		PCS : '', 
		IDG : '20015515533', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	},{
		id : '2', Type : 'IDG', 
		PCS : '', 
		IDG : '20015515533', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	},{
		id : '3', Type : 'IDG', 
		PCS : '', 
		IDG : '20015515533', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	},{
		id : '4', Type : 'IDG', 
		PCS : '', 
		IDG : '20015515533', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	},{
		id : '5', Type : 'IDG', 
		PCS : '', 
		IDG : '20015515533', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	},{
		id : '6', Type : 'bla', 
		PCS : '', 
		IDG : '20015515535', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	},{
		id : '7', Type : 'IDG', 
		PCS : '', 
		IDG : '12345678901', 
		CRF : 'E5533', 
		DEF : '123456', 
		Design : 'EPISCOPE E55', 
		Qte : '1', 
		Mag : 'S1MLS', 
		OAOV : 'NS1234567', 
		LOALOV : '1', 
		POOPOA : '', 
		Delai : '07/07/15', 
		ComInt : ''
	}];

	/*-- Liste des entêtes des colonnes du tableau ressource*/
	var anColumnDefs = [
		{headerName : "Type", field : 'Type'},
		{headerName : "PCS", field : 'PCS'},
		{headerName : "IDG", field : 'IDG', filter: 'number'},
		{headerName : "CRF", field : 'CRF', filter: 'number'},
		{headerName : "DEF", field : 'DEF', filter: 'number'},
		{headerName : "Désign.", field : 'Design'},
		{headerName : "Qté", field : 'Qte'},
		{headerName : "Mag", field : 'Mag'},
		{headerName : "OA/OV", field : 'OAOV'},
		{headerName : "LOA/LOV", field : 'LOALOV'},
		{headerName : "POO/POA", field : 'POOPOA'},
		{headerName : "Délai", field : 'Delai'},
		{headerName : "Com. Int.", field : 'ComInt'},
	];
	
	/*-- Options du tableau ressource*/
    $scope.analyseGridOptions = {
        columnDefs: anColumnDefs,
		enableSorting: true,
		enableFilter: true,
		groupHeaders: true,
		rowHeight: 22,
		autoSizeColumns : true,
		suppressMovableColumns : true,
		angularCompileRows : true,
		rowSelection: 'single',
		onSelectionChanged: onSelectionChanged2,
        rowData: $scope.myDataAnalyse
    };
	
	/*-- Colorisation des lignes du tableau ressource en fonction de l'id d'une ressource*/
	$scope.tabRowColorA=[{'background-color': '#b6d7a8'}, {'background-color': 'white'}];
	$scope.analyseGridOptions.getRowStyle = function(params) {
		var res = false;
		if ($scope.prevValue != params.data.id) {
			$scope.prevIndice = 1 - $scope.prevIndice;
			res = $scope.tabRowColorA[$scope.prevIndice];
		} else {
			res = $scope.tabRowColorA[$scope.prevIndice];
		}
		$scope.prevValue = params.data.id;
		$scope.analyseGridOptions.api.sizeColumnsToFit();
		return res;
	}
	
	/*-- Fonction de filtre en fonction de la recherche demandé*/
	$scope.onFilterChanged = function (value) {
		$scope.analyseGridOptions.api.setQuickFilter(value);
	}
	
	/*-- Fonction appelé lors d'un clic sur une ligne du tableau ressource*/
	$scope.myDataRepLFT = [];
	function onSelectionChanged2() {
		var selectedRows = $scope.gridOptions.api.getSelectedRows();
		var selectedRowsString = '';
		selectedRows.forEach(function(selectedRow, index) {
			angular.forEach($scope.myDataInit, function(itemOfTable) {
				
			});
		});
	}
});

