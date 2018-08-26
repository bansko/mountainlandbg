'use strict';

/**
 * @ngdoc service
 * @name mountainlandbgApp.PropertyApi
 * @description
 * # PropertyApi
 * Factory in the mountainlandbgApp.
 */
angular.module('mountainlandbgApp')
  .factory('PropertyApi', function ($resource) {
    var url = '';
    return $resource(
      url,
      {
        id: '@_id'
      },
      {
        get: {
          url: url + 'https://raw.githubusercontent.com/bansko/mountainlandbg/master/data/property/:id.json',
          method: 'GET'
        },
        cadastre: {
          url: url + 'https://raw.githubusercontent.com/bansko/mountainlandbg/master/data/cadastre/:id.json',
          method: 'GET'
        },
        query: {
          url: url + 'https://api.github.com/repos/bansko/mountainlandbg/contents/data/property',
          method: 'GET',
          isArray: true
        }
      }
    );
  });
