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
                property.cadastre = [];
                $scope.properties.push(property);
                for (var j in property.cadastral_id) {
                  PropertyApi.cadastre(
                    { id: property.cadastral_id[j] },
                    function (cadastre) {
                      if ($scope.properties[i]) {
                        $scope.properties[i].cadastre.push(cadastre);
                      }
                    },
                    function (cadastreError) {
                      $scope.error = cadastreError;
                    }
                  );
                }
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
