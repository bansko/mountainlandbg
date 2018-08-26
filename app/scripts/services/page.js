'use strict';

/**
 * @ngdoc service
 * @name mountainlandbgApp.Page
 * @description
 * # Page
 * Factory in the mountainlandbgApp.
 */
angular.module('mountainlandbgApp')
  .factory('Page', function () {
    var title = 'default';
    return {
      title: function() {
        return title;
      },
      setTitle: function (newTitle) {
        title = newTitle;
      }
    };
  });
