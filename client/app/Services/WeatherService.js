(function() {
    'use strict';

    angular.module('homeNetApp')
        .factory('WeatherService', function($http, $q) {
        	var url,
            	key = '<key>', //Please see http://www.wunderground.com/
            	data,
	            service = {
	            	/**
	            	 * @param success callback
	            	 * @param failure callback
	            	 */
	            	getData: _getLocation
	            };

            return service;

            var _deffered;

            function _getWeather() {
            	return $http.jsonp(url)
            		.success(function(data) {
            			_deffered.resolve(data); //notify promise is successful
            		})
            		.error(function() {
            			_deffered.reject('Error occured');
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
            function _getLocation() {
                if(_deffered) {
                    return _deffered.promise;
                }

                _deffered = $q.defer(); //creates an object that can return a promise

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(_geoSuccess, _geoFail)
                } else {
                    alert('Geolocation is not supported');
                }

                return _deffered.promise;
            };
        })
})();