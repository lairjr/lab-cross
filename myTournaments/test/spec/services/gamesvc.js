'use strict';

describe('Service: gameSvc', function () {

  // load the service's module
  beforeEach(module('myTournamentsApp'));

  // instantiate service
  var gameSvc;
  beforeEach(inject(function (_gameSvc_) {
    gameSvc = _gameSvc_;
  }));

  it('should do something', function () {
    expect(!!gameSvc).toBe(true);
  });

});
