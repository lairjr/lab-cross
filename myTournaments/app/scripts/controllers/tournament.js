'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:TournamentCtrl
 * @description
 * # TournamentCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('TournamentCtrl', function ($scope, $stateParams, TournamentSvc, TOURNAMENT_OPTIONS) {
        $scope.tournament = {};
        $scope.TOURNAMENT_OPTIONS = TOURNAMENT_OPTIONS;

        $scope.init = function () {
            $scope.tournament = getTournament($stateParams.tournamentId);
        };

        function getTournament(tournamentId) {
            return TournamentSvc.get(tournamentId);
        };
    });
