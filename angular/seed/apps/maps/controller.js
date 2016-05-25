//angular.module('mapsModule', [ 'uiGmapgoogle-maps' ]);
var module = angular.module('mapsModule', ['uiGmapgoogle-maps'])

module.controller('Controller', function($scope, $log, $filter) {
	$scope.mapinit = {
		center : {
			latitude : 45.1852545,
			longitude : 5.7291037
		},
		zoom : 14
	};
});

module.directive('myMap', function() {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(50, 2),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
        setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
        setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
});












//module.controller('Controller', function($scope, $log, $filter, uiGmapGoogleMapApi) {
//	$scope.mapinit = {
//		center : {
//			latitude : 45.1852545,
//			longitude : 5.7291037
//		},
//		zoom : 14
//	};
//
//	uiGmapGoogleMapApi.then(function(maps) {
//		$scope.map = {
//			events : {
//				tilesloaded : function(maps, eventName, args) {
//					// functions that run every time
//					alert('I say this after every tile load');
//
//					if (initialMapLoad === 0) {
//						// functions that run only once
//						alert('I only say this once' + maps.getBounds());
//						initialMapLoad = 1;
//					}
//				},
//			}
//		};
//	})
//
//});
//
//module.directive("bnjDirective", [ function() {
//	return {
//		restrict : "A",
//		link : function(scope, element, attrs) {
//			element.bind('click', function() {
//				alert(scope.map1.latitude);
//			});
//		}
//	};
//} ]);
