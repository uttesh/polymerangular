'use strict';

var polimerAngularapp = angular.module('paApp', ['polymerAngular']);

polimerAngularapp.controller('buttonCtrl', function($scope) {
    console.log('buttonCtrl ontroller');
    
    $scope.raisedButton = function(){
        console.log('raisedButton testing ');
    }

});
