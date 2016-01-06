'use strict';

/**
 * @ngdoc service
 * @name myTournamentsApp.gameSvc
 * @description
 * # gameSvc
 * Service in the myTournamentsApp.
 */
angular.module('myTournamentsApp')
    .service('GameSvc', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        function Team(name, score, image, acronym) {
            return {
                Name: name,
                Score: score,
                Image: image,
                Acronym: acronym
            };
        };

        function Game(data) {
            return {
                Id: data.Id,
                Date: data.Date,
                Location: data.Location,
                HomeTeam: data.HomeTeam,
                AwayTeam: data.AwayTeam
            };
        };

        var gameList = [];

        var firstGame = new Game(
            {
                Id: 10234,
                Date: "29/1/2016",
                Location: "Corinthians",
                HomeTeam: new Team("São Luís", 86, "image.svc", "SLS"),
                AwayTeam: new Team("Cosseno", 82, "image.svc", "COS")
            });
        gameList.push(firstGame);
        gameList.push(new Game(
            {
                Id: 10234,
                Date: "30/1/2016",
                Location: "Corinthians",
                HomeTeam: new Team("Flamengo", 106, "image.svc", "FLA"),
                AwayTeam: new Team("Dinus", 76, "image.svc", "DIN")
            }));

        return {
            getListByTournament: function (tournamentId) {
                return gameList;
            }
        }
    });