angular.module('myApp')
    .factory("sampleService", function ($http, $q) {
        return {
            getCities: function () {
                var defer = $q.defer();

                $http.get("city.json")
                    .success(function (data) {
                        defer.resolve(data);
                    })
                    .error(function () {
                        defer.reject("Failed to get city details");
                    });
                return defer.promise;
            },
            postPersonDetails: function (data) {
                var defer = $q.defer();
                $http.post("/echo/json/", data).success(function (data, status) {
                        //$scope.hello = data;
                        defer.resolve(data);
                    })
                    .error(function () {
                        defer.reject("Failed to post personal details");
                    });
                return defer.promise;
            }
        };

    });
