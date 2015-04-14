


(function() {
    'use strict';

    angular.module('homeNetApp')
        .factory('WeatherService', function($http) {
        	var url,
            	key = 'cefedce10ed4e529', //Please see http://www.wunderground.com/
            	data,
            	successCallback,
            	errorCallback,
	            service = {
	            	/**
	            	 * @param success callback
	            	 * @param failure callback
	            	 */
	            	getData: _getLocation
	            };

            return service;

            function _getWeather() {
            	return $http.jsonp(url)
            		.success(function(data) {
            			successCallback(data);
            		})
            		.error(function() {
            			errorCallback();
            		});
            };

            function _geoSuccess(position) {
            	url = "http://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + position.coords.latitude + "," + position.coords.longitude + ".json?callback=JSON_CALLBACK";
                _getWeather();
            };

            function _geoFail() {
                alert("Failed to find location.");
                errorCallback();
            };
            /**
             * @param success callback
             * @param failure callback
             */
            function _getLocation(_successCB, _errorCB) {
            	successCallback = _successCB;
            	errorCallback = _errorCB;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(_geoSuccess, _geoFail)
                } else {
                    alert('Geolocation is not supported');
                }
            };
        })
})();