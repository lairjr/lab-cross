'use strict';

describe('Service: tournamentSvc', function () {

  // load the service's module
  beforeEach(module('myTournamentsApp'));

  // instantiate service
  var tournamentSvc;
  beforeEach(inject(function (_tournamentSvc_) {
    tournamentSvc = _tournamentSvc_;
  }));

  it('should do something', function () {
    expect(!!tournamentSvc).toBe(true);
  });

});
