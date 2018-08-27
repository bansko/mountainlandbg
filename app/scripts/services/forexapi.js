'use strict';

/**
 * @ngdoc service
 * @name mountainlandbgApp.ForExApi
 * @description
 * # ForExApi
 * Factory in the mountainlandbgApp.
 */
angular.module('mountainlandbgApp')
  .factory('ForExApi', function ($resource) {
    var url = 'https://raw.githubusercontent.com/bansko/mountainlandbg/master/data/exchange-rates.json';
    return $resource(
      url,
      {
        id: '@_id'
      },
      {
        query: {
          url: url + '?' + Math.floor(Date.now()),
          isArray: true
        }
      }
    );
});
