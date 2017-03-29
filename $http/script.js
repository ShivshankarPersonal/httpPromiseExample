var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, sampleService) {

    sampleService.getCities()
        .then(function (data) {
                $scope.cities = data;
            },
            function (data) {
                console.log('data retrieval failed.')
            });


    //post
    $scope.newName = "";
    $scope.sendPost = function () {

        //Serialize data
        var data = $.param({
            json: JSON.stringify({
                firstname: $scope.firstName,
                lastName: $scope.lastName
            })
        });

        //and then call post service
        sampleService.postPersonDetails(data)
            .then(function(data){
                console.log("successfully posted")
            }),
            function(data){
                console.log("failed to post")
            }
    }
});