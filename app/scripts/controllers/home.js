'use strict';

/**
 * @ngdoc function
 * @name mountainlandbgApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mountainlandbgApp
 */
angular.module('mountainlandbgApp')
  .controller('HomeCtrl', function ($scope, PropertyApi) {
    $scope.properties = [];
    PropertyApi.query(
      {},
      function (manifests) {
        for (var i in manifests) {
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
                    $scope.properties[i].cadastre.push(cadastre);
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
      },
      function(queryError) {
        $scope.error = queryError;
      }
    );
  });
