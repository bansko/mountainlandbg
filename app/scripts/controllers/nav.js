'use strict';

/**
 * @ngdoc function
 * @name mountainlandbgApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the mountainlandbgApp
 */
angular.module('mountainlandbgApp')
  .controller('NavCtrl', function ($scope, NavApi, $rootScope) {
    NavApi.query({}, function (routes) {
      $scope.routes = routes;
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = $scope.routes.find(function(r) {
          return r.id === current.$$route.controllerAs;
        }).title;
      });
    });
  });
