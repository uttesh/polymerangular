'use strict';

var polimerAngularapp = angular.module('paApp', ['polymerAngular']);

polimerAngularapp.controller('buttonCtrl', function($scope) {
    console.log('buttonCtrl ontroller');

    $scope.raisedButton = function() {
        console.log('raisedButton testing ');
    }

    $scope.tabClicked = function(tab) {
        $scope.selectedTab = tab.index;
        console.log('Selected Tab : '+ $scope.selectedTab);
    };
    
    $scope.tab1Object = {id:'1234',name:'testing tab1'};

});

polimerAngularapp.controller('TestController', ['$scope', function($scope) {
    $scope.myFirstFunction = function(msg) {
         alert(msg + '!!! first function call!');   
    };
    $scope.mySecondFunction = function(msg) {
         alert(msg + '!!! second function call!');   
    };
}]);
