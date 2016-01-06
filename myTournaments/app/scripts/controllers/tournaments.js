'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:TournamentsCtrl
 * @description
 * # TournamentsCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('TournamentsCtrl', function ($scope, TournamentSvc) {
        $scope.tournamentList = [];

        $scope.init = function () {
            $scope.tournamentList = getTournaments();
        };

        function getTournaments() {
            return TournamentSvc.getList();
        };
    });