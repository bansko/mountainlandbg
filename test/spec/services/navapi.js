'use strict';

describe('Service: NavApi', function () {

  // load the service's module
  beforeEach(module('mountainlandbgApp'));

  // instantiate service
  var NavApi;
  beforeEach(inject(function (_NavApi_) {
    NavApi = _NavApi_;
  }));

  it('should do something', function () {
    expect(!!NavApi).toBe(true);
  });

});
