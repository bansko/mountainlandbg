'use strict';

describe('Service: PropertyApi', function () {

  // load the service's module
  beforeEach(module('mountainlandbgApp'));

  // instantiate service
  var PropertyApi;
  beforeEach(inject(function (_PropertyApi_) {
    PropertyApi = _PropertyApi_;
  }));

  it('should do something', function () {
    expect(!!PropertyApi).toBe(true);
  });

});
