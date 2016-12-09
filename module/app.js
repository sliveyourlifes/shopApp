/**
 * Created by Alex on 30.11.2016.
 */
angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/shops.html',
            controller: 'shopController'
        }).when('/shops/:name',{
            templateUrl:'views/products.html',
            controller: 'productController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);


