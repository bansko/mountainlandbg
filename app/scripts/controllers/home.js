'use strict';

/**
 * @ngdoc function
 * @name mountainlandbgApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mountainlandbgApp
 */
angular.module('mountainlandbgApp')
  .controller('HomeCtrl', function ($scope, PropertyApi, ForExApi) {
    $scope.properties = [];
    PropertyApi.query(
      {},
      function (manifests) {
        for (var i in manifests) {
          if (manifests[i].name) {
            var id = manifests[i].name.replace(/\.[^/.]+$/, '');
            PropertyApi.get(
              { id: id },
              function (property) {
                $scope.properties.push(property);
              },
              function (getError) {
                $scope.error = getError;
              }
            );
          }
        }
      },
      function(queryError) {
        $scope.error = queryError;
      }
    );
    $scope.rates = {}
    ForExApi.query(
      {},
      function (rates) {
        for (var k in rates) {
          $scope.rates[rates[k].target] = rates[k].rate;
        }
      },
      function(ratesError) {
        $scope.error = ratesError;
      }
    );
  });
