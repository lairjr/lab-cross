'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('GameCtrl', function ($scope, $stateParams) {
        $scope.gameId = $stateParams.gameId;
    });
