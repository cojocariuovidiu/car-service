(function (angular, $) {
    carServiceApp = angular.module("carServiceApp", []);

    //use the following style of DI to avoid code fault on minification
    carServiceApp.controller("VendorController", ['$scope', '$http', function ($scope, $http) {
        var url = "http://localhost:3000/vendors"
        $http.get(url).then(function (response) {
            console.log(response);
            $scope.vendors = response.data;
        });

    }]);

    //Bootstrap the application in order to ensure the single instance.

    angular.bootstrap("#main-container", ['carServiceApp']);
})(angular, $)