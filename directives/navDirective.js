 /**
 * Created by Alex on 01.12.2016.
 */
 var app = angular.module('app');
 app.directive('navigationbar',function () {
     return{
        restrict: "EA",
         templateUrl: 'views/navigationbar.html',
         controller: function ($scope) {
             $scope.message = 'Home'
         }
     }
 });