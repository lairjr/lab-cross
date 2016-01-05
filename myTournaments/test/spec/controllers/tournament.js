'use strict';

describe('Controller: TournamentCtrl', function () {

  // load the controller's module
  beforeEach(module('myTournamentsApp'));

  var TournamentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TournamentCtrl = $controller('TournamentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TournamentCtrl.awesomeThings.length).toBe(3);
  });
});
