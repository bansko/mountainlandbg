'use strict';

/**
 * @ngdoc service
 * @name mountainlandbgApp.NavApi
 * @description
 * # NavApi
 * Factory in the mountainlandbgApp.
 */
angular.module('mountainlandbgApp')
  .factory('NavApi', function ($resource) {
    var url = 'https://raw.githubusercontent.com/bansko/mountainlandbg/master/data/nav.json';
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
