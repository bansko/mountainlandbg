'use strict';

/**
 * @ngdoc directive
 * @name mountainlandbgApp.directive:detectActiveTab
 * @description
 * # detectActiveTab
 */
angular.module('mountainlandbgApp')
  .directive('detectActiveTab', function ($location) {
    return {
      link: function postLink(scope, element, attrs) {
        scope.$on('$routeChangeSuccess', function () {
          var pathLevel = attrs.detectActiveTab || 1,
              pathToCheck = $location.path().split('/')[pathLevel] || 'current $location.path does not reach this level',
              tabLink = attrs.href.split('/')[pathLevel] || 'href does not include this level';
          if (pathToCheck === tabLink) {
            element.parent().addClass('active');
          }
          else {
            element.parent().removeClass('active');
          }
        });
      }
    };
  });
