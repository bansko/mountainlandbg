'use strict';

/**
 * @ngdoc function
 * @name mountainlandbgApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the mountainlandbgApp
 */
angular.module('mountainlandbgApp')
  .controller('NavCtrl', function ($scope, NavApi) {
    NavApi.query({}, function (routes) {
      $scope.routes = routes;
    });
  });
