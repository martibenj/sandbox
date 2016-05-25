// main.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {

    $scope.myDataInit = [{
        idFT: "FT1",
        listLFT: [{ idLFT: 'FT1-LFT1', descLFT: 'descLFT1' }, { idLFT: 'FT1-LFT2', descLFT: 'descLFT2' }]
    }, {
        idFT: "FT2",
        listLFT: [{ idLFT: 'FT2-LFT1', descLFT: 'descLFT1' }, { idLFT: 'FT2-LFT2', descLFT: 'descLFT2' }]
    }];
    console.log('myDataInit:' + $scope.myDataInit);
    // Lecture de la liste des infos des objets FT et LFT
    //angular.forEach($scope.myData, function(value, key, item) {
    //console.log('avantValue:' + value);
    //console.log('avantKey:' + key);
    //console.log('avantItem:' + item);
    //console.log('avantValue.idFT:' + value.idFT);
    //console.log('avantValue.listLFT:' + value.listLFT);
    // angular.forEach(value.listLFT, function(value, key, item) {
    //console.log('dedansValue.idLFT:' + value.idLFT);
    //console.log('dedansValue.descLFT:' + value.descLFT);
    //});
    //});

    $scope.gridOptions = {
        data: 'myDataTraitee',
        multiSelect: false,
        columnDefs: [{ field: 'idFT', displayName: 'Num FT' },
            { field: 'idLFT', displayName: 'Num LFT' }
        ]
    };

    $scope.myDataTraitee = [];
    console.log('myDataTraitee:' + $scope.myDataTraitee);

    angular.forEach($scope.myDataInit, function(itemOfTable) {
        console.log('itemOfTable.listLFT:' + itemOfTable.listLFT);
        var nomsLFT = '';
        angular.forEach(itemOfTable.listLFT, function(itemLFT, numRang) {
            console.log('itemLFT.idLFT:' + itemLFT.idLFT);
            if (numRang != 0) {
                nomsLFT += " et "
            }
            $scope.myDataTraitee.push({
                idFT: itemOfTable.idFT,
                idLFT: itemLFT.idLFT
            });
        });
    });

    console.log('myDataTraitee:' + $scope.myDataTraitee);


    $scope.title = "ng-grid";
});
