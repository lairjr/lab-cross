'use strict';

/**
 * @ngdoc service
 * @name myTournamentsApp.tournamentSvc
 * @description
 * # TournamentSvc
 * Service in the myTournamentsApp.
 */
angular.module('myTournamentsApp')
    .service('TournamentSvc', function () {
        // var resource = $resource('../Api/Post/:id', { id: '@id' },
        //     {
        //         'search': { url: '../Api/Post/Search/', method: 'GET' },
        //         'getAll': { url: '../Api/Post/List/', method: 'GET' }
        //     });

        function Tournament(data) {
            return {
                Id: data.Id,
                Title: data.Title,
                Type: data.Type,
                Location: data.Location,
                OptionsAvailable: data.OptionsAvailable
            };
        };

        var tournamentList = [];

        var firstTournament = new Tournament(
            {
                Id: '1234',
                Title: 'Liga Municipal de Basquete',
                Type: 'Basquete',
                Location: 'Santa Cruz do Sul',
                OptionsAvailable: ["SCHEDULE", "STANDINGS", "STATS"]
            });
        tournamentList.push(firstTournament);
        tournamentList.push(new Tournament({ Id: '5678', Title: 'Liga Municipal de Basquete', Type: 'Basquete', Location: 'Porto Alegre' }));
        tournamentList.push(new Tournament({ Id: '9012', Title: 'JUGS', Type: 'Basquete', Location: 'Rio Grande do Sul' }));

        return {
            get: function (tournamentId) {
                return tournamentList[0];
            },
            getList: function () {
                return tournamentList;
            }
        }
    });