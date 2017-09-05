angular.module('app.services', ['ngStorage'])


  .factory('VeloData', function($http, $q) {
        var dataSource = 'http://datasets.antwerpen.be/v4/public/gis/velostation';
        return {
            getVeloData: function(){
                var deferred = $q.defer();
                var dataSource = 'http://datasets.antwerpen.be/v4/public/gis/velostation';
                $http.get(dataSource)
                .success (function (response) {
        		    deferred.resolve (response);
		        })
		        .error (function (response) {
		    	    deferred.reject (response);
		        });
			    return deferred.promise;
            }
        }
    });


