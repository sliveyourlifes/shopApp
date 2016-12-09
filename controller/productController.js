/**
 * Created by Alex on 01.12.2016.
 */
var app = angular.module('app');

app.controller('productController', function ($scope, $http, $routeParams) {
    $http.get('data/' + $routeParams.name + '.json').success(function (data) {
        $scope.products = data.products;
        $scope.coords = data.coords;

        var myLatLng = {lat:$scope.coords.latitude, lng:$scope.coords.longitude};

        var mapOptions = {
            zoom: 15,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.marker = new google.maps.Marker({
            position: myLatLng,
            map: $scope.map,
            title: 'Home',
            animation: google.maps.Animation.DROP,
            draggable: true
        });

        $scope.marker.setMap($scope.map);
        $scope.marker.addListener('click', toggleBounce);

        function toggleBounce() {
            if ($scope.marker.getAnimation() !== null) {
                $scope.marker.setAnimation(null)
            } else {
                $scope.marker.setAnimation(google.maps.Animation.BOUNCE)
            }
        }
    });

    $scope.delete = function (product) {
        var index = $scope.products.indexOf(product);
        $scope.products.splice(index, 1);
    };

    $scope.create = function (name, description) {
        $scope.products.push({name: name, description: description});
        $http.post('data', $scope.shops)
    };

    $scope.activeProduct = null;

    $scope.edit = function (product) {
        $scope.activeProduct = product;
    };

    $scope.update = function () {
        $scope.activeProduct = null;
    };






});