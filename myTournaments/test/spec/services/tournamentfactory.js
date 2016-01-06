'use strict';

describe('Service: tournamentFactory', function () {

  // load the service's module
  beforeEach(module('myTournamentsApp'));

  // instantiate service
  var tournamentFactory;
  beforeEach(inject(function (_tournamentFactory_) {
    tournamentFactory = _tournamentFactory_;
  }));

  it('should do something', function () {
    expect(!!tournamentFactory).toBe(true);
  });

});
