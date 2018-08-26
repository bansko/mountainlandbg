'use strict';

/**
 * @ngdoc function
 * @name mountainlandbgApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the mountainlandbgApp
 */
angular.module('mountainlandbgApp')
  .controller('NavCtrl', function ($scope) {
    $scope.routes = [
      {
        id: "home",
        title: "affordable mountain land in bulgaria",
        link: "home",
        description: ""
      },
      {
        id: "about",
        title: "affordable mountain land in bulgaria",
        link: "how it works",
        description: ""
      },
      {
        id: "contact",
        title: "affordable mountain land in bulgaria",
        link: "contact",
        description: ""
      }
    ];
  });
