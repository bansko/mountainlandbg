'use strict';

describe('Service: ForExApi', function () {

  // load the service's module
  beforeEach(module('mountainlandbgApp'));

  // instantiate service
  var ForExApi;
  beforeEach(inject(function (_ForExApi_) {
    ForExApi = _ForExApi_;
  }));

  it('should do something', function () {
    expect(!!ForExApi).toBe(true);
  });

});
