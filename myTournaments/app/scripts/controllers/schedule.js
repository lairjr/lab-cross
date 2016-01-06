'use strict';

/**
 * @ngdoc function
 * @name myTournamentsApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the myTournamentsApp
 */
angular.module('myTournamentsApp')
    .controller('ScheduleCtrl', function ($filter, $scope, $stateParams, GameSvc) {
        $scope.availableDateList = [];
        $scope.currentGameList = [];
        $scope.currentDateIndex = 0;
        $scope.gameList = [];

        $scope.init = function () {
            $scope.gameList = getGameList($stateParams.tournamentId);
            
            getAvailableDates();
            getNextAvailableDate();
            getGameListByCurrentDate();
        };

        $scope.nextDate = function () {
            $scope.currentDateIndex++;
            getGameListByCurrentDate();
        };

        $scope.priorDate = function () {
            $scope.currentDateIndex--;
            getGameListByCurrentDate();
        };

        function getAvailableDates() {
            $scope.availableDateList = [];
            for (var i = 0; i < $scope.gameList.length; i++) {
                var gameDate = $scope.gameList[i].Date;
                if ($scope.availableDateList.indexOf(gameDate) == -1) {
                    $scope.availableDateList.push(gameDate);
                }
            }
        };

        function getNextAvailableDate() {
            var currentDateObj = new Date();
            var currentDate = currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();

            var i = 0;
            
            debugger;
            for (i = 0; i < $scope.availableDateList.length; i++) {
                if ($scope.availableDateList[i] >= currentDate) {
                    i++; // we need that to avoid returning to the previous value
                    break;   
                }
            }

            $scope.currentDateIndex = i - 1;
        };

        function getGameList(tournamentId) {
            return GameSvc.getListByTournament(tournamentId);
        };

        function getGameListByCurrentDate() {
            var currentDate = $scope.availableDateList[$scope.currentDateIndex];
            $scope.currentGameList = $filter('filter')($scope.gameList, { Date: currentDate }, true);
        };
    });
