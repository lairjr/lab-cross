'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('ScheduleCtrl', function ($scope, $stateParams) {
        $scope.tournamentId = $stateParams.tournamentId;
    });
