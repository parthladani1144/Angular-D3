
(function () {
    'use strict';
  
    angular.module('d3Chart.controllers')
        .controller('d3Ctrl', function d3Ctrl ($scope) {
            $scope.options = {width: 500, height: 500, 'bar': 'aaa'};
            $scope.data = [1, 2];
            $scope.hovered = function(d){
                $scope.barValue = d;
                $scope.$apply();
            };
            $scope.barValue = 'None';
        });
    }()
);
