// Code goes here

// Initializing the AngularJs
var app = angular.module('myApp', [ 'ngGrid' ]);

// Defining a Controller in AngularJs
app
		.controller(
				'myAppCtrl',
				function($scope, $http) {
					$scope.parameterSelections = [];
					// Declare an array to handle the selected values in the
					// grid
					$scope.filterOptions = {
						// Filtering options in the Grid
						filterText : ''
					};

					// Get the JSON data
					$scope.parameterData = [ {
						"Name" : "Alfreds Futterkiste",
						"City" : "Berlin",
						"Country" : "Germany"
					}, {
						"Name" : "Ana Trujillo Emparedados y helados",
						"City" : "México D.F.",
						"Country" : "Mexico"
					}, {
						"Name" : "Antonio Moreno Taquería",
						"City" : "México D.F.",
						"Country" : "Mexico"
					}, {
						"Name" : "Around the Horn",
						"City" : "London",
						"Country" : "UK"
					}, {
						"Name" : "B's Beverages",
						"City" : "London",
						"Country" : "UK"
					}, {
						"Name" : "Berglunds snabbköp",
						"City" : "Luleå",
						"Country" : "Sweden"
					}, {
						"Name" : "Blauer See Delikatessen",
						"City" : "Mannheim",
						"Country" : "Germany"
					}, {
						"Name" : "Blondel père et fils",
						"City" : "Strasbourg",
						"Country" : "France"
					}, {
						"Name" : "Bólido Comidas preparadas",
						"City" : "Madrid",
						"Country" : "Spain"
					}, {
						"Name" : "Bon app'",
						"City" : "Marseille",
						"Country" : "France"
					}, {
						"Name" : "Bottom-Dollar Marketse",
						"City" : "Tsawassen",
						"Country" : "Canada"
					}, {
						"Name" : "Cactus Comidas para llevar",
						"City" : "Buenos Aires",
						"Country" : "Argentina"
					}, {
						"Name" : "Centro comercial Moctezuma",
						"City" : "México D.F.",
						"Country" : "Mexico"
					}, {
						"Name" : "Chop-suey Chinese",
						"City" : "Bern",
						"Country" : "Switzerland"
					}, {
						"Name" : "Comércio Mineiro",
						"City" : "São Paulo",
						"Country" : "Brazil"
					} ];
					$scope.cellInputEditableTemplate = '<input ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" ng-blur="updateEntity(row)" />';
					// Define and design a ng-grid
					$scope.parameterGrid = {
						data : 'parameterData',
						enableColumnResize : true,
						rowHeight : 40,
						headerRowHeight : 40,
						maxWidth : '500px',
						minWidth : '50px',
						filterOptions : $scope.filterOptions,
						// Provide the filter options for the Grid
						showColumnMenu : true,
						selectedItems : $scope.parameterSelections,
						multiSelect : false,
						enableCellEditOnFocus : true,
						cellClass : 'gridFonts',
						afterSelectionChange : function(rowItem) {
							if (rowItem.selected) {
								// write code to execute only when selected.
								var contentId = 1;
								var detailData = [];
								angular.forEach(rowItem.entity, function(value,
										key) {
									// looping through a selected row and
									// getting the data ready for the details
									// grid
									var editFlag = false;
									if (key.toLowerCase() == "city") {
										editFlag = true;
									}
									var dataRow = {
										col1 : firstToUpperCase(key),
										col2 : value,
										col3 : editFlag,
										contentId : contentId
									};
									// Assigning key value to Col1 &
									// Col2 in the array
									detailData.push(dataRow);
									contentId++;
								});

								$scope.detailsGridData = detailData;
								// Put the data to the Details grid
							} else {
								// write code on deselection.
							}
						},
						// Defining Columns
						columnDefs : [ {
							field : 'Name',
							enableHiding : false,
							displayName : 'Name',
							enableCellEdit : false
						}, {
							field : 'City',
							enableColumnMenu: false,
							displayName : 'City',
							enableCellEdit : false
						}, {
							field : 'Country',
							displayName : 'Country',
							enableCellEdit : false
						} ]
					};
					var selectedOption = "";
					// Define and design a ng-grid
					$scope.parameterEditGrid = {
						data : 'detailsGridData',
						enableRowSelection : false,
						enableColumnResize : true,
						headerRowHeight : 0,
						rowHeight : 40,
						enableCellEditOnFocus : true,
						multiSelect : false,
						// Defining the columns of Details Grid
						columnDefs : [
								{
									field : 'col1',
									displayName : 'Field Name',
									enableCellEdit : false,
									cellClass : 'rightColGridStyle'
								},
								{
									field : 'col2',
									displayName : 'Field Value',
									cellClass : 'leftColGridStyle',
									enableCellEdit : false,
									cellTemplate : '<div class="ngCellText"><div ng-show="!row.entity.col3">{{row.getProperty(col.field)}}</div>'
											+ '<div ng-show="row.entity.col3" class="ngCellText"><input style="background-color:{{colorCell}}" ng-change="colorchange(this)" type="text"  ng-model="row.entity.col2"/></div></div>'
								} ]
					};

					// Function to make the first letter of the word passed
					// to caps.
					function firstToUpperCase(str) {
						return str.substr(0, 1).toUpperCase() + str.substr(1);
					}

					// Function that is called after the edit of the grid is
					// done.
					$scope.$on('ngGridEventEndCellEdit', function(data) {

					});

					$scope.colorchange = function(contex) {
						contex.colorCell = "red";
						selectedOption = contex;
					};

					$scope.changes = [];

					// $scope.$watch('detailsGridData', function(newVal, oldVal)
					// {
					// for (var i = 0; i < oldVal.length; i++) {
					// if (!angular.equals(oldVal[i], newVal[i])) {
					//
					// var indexOfOld = $scope.indexOfExisting(
					// $scope.changes, 'contentId',
					// newVal[i].contentId);
					//
					// if (indexOfOld >= 0) {
					// $scope.changes.splice(indexOfOld, 1);
					// }
					//
					// $scope.changes.push(newVal[i]);
					//							}
					//						}
					//					}, true);

					$scope.checkChange = function() {
						for (var i = 0; i < $scope.changes.length; i++) {
							console.log($scope.changes[i].name);
							// putEntity($scope.changes[i])
						}
						$scope.changes = [];
						selectedOption.colorCell = "none";
					};

					$scope.indexOfExisting = function(array, attr, value) {
						for (var i = 0; i < array.length; i += 1) {
							if (array[i][attr] === value) {
								return i;
							}
						}
					};

				});