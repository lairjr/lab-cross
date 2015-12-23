'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('HomeCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.label = 'My Tournaments app';
    });
