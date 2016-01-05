'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:TournamentCtrl
 * @description
 * # TournamentCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('TournamentCtrl', function ($scope, $stateParams) {
        $scope.tournamentId = $stateParams.tournamentId;
    });
