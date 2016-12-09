/**
 * Created by Alex on 30.11.2016.
 */
var app = angular.module('app');
 app.controller('shopController',function ($scope,$http) {
     
    $http.get('data/shops.json').success(function (data) {
        $scope.shops = data.shops;

    });

     $scope.addShop = function (name,description,number,timeOfWork,address) {
         $scope.shops.push({name:name,description:description,number:number,timeOfWork:timeOfWork,address:address});
         $http.post('data',$scope.shops)
     };

     $scope.deleteShop = function (shop) {
         var index = $scope.shops.indexOf(shop);
         $scope.shops.splice(index,1);
         $http.post('data/shops.json',$scope.shops)
     };
 });
