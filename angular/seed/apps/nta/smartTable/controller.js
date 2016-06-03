// main.js
var app = angular.module('myApp',['smart-table']);
app.controller('basicsCtrl', ['$scope', '$filter', function ($scope, $filter) {
	$scope.myDataInit = [ {
		idFT : "1",
		dateFT : "01/01/2016",
		nomFT : "2016/XML/000000001",
		Neutr : "",
		RepFT : "KO",
		dateAR1 : "01/01/2016",
		immat : "",
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
		immat : "",
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
		immat : "CYA-345",
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
		immat : "",
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
		immat : "",
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
		immat : "",
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
		dateFT : "08/01/2016",
		nomFT : "2016/XML/000000008",
		Neutr : "",
		RepFT : "OK",
		dateAR1 : "01/01/2016",
		immat : "",
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
		dateFT : "10/01/2016",
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
	}
	];
	
	$scope.showDateFT = true;
	/*
	$scope.$watch('myDataTraitee', function(newVal) {
		for (var te = 0 ; te < newVal.length ; te++){
			console.log("selected items: " + newVal[te].innerText || newVal[te].textContent);
		}
		
	}, true);*/

	$scope.triIdLFT={
        idLFT: function (value) {
            for(var i = 0; i < value.listLFT.length; i++){
				return value.listLFT[i].idLFT;
			}
        }
    }
	
	$scope.triIndice={
        indice: function (value) {
            for(var i = 0; i < value.listLFT.length; i++){
				return value.listLFT[i].indice;
				idg.push(value.listLFT[i].indice);
			}
			return idg;
        }
    }
	
	$scope.getters={
        idgDem: function (value) {
			var idg = [];
            for(var i = 0; i < value.listLFT.length; i++){
				console.log("---- i : "+i+" length : "+value.listLFT.length+" idgDem : "+value.listLFT[i].idgDem)
				idg.push(value.listLFT[i].idgDem);
			}
			return idg;
        }
    }
	
	$scope.triRep={
		rep: function (value){
			var idg = [];
            for(var i = 0; i < value.listLFT.length; i++){
				for(var j = 0; j < value.listLFT[i].listRep.length; j++){
					idg.push(value.listLFT[i].listRep[j].rep);
				}
			}
			return idg;
		}
	}
	
}]);