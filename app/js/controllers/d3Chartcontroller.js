(function () {
    'use strict';
  
    angular.module('d3Chart.controllers')
        .controller('d3Ctrl', function d3Ctrl ($scope) {
            $scope.options = {width: 500, height: 500, 'bar': 'aaa'};
            
            // Chart X-Y Data for Hover 
            $scope.barXValue = 'None';
            $scope.barYValue = 'None';

            $scope.hovered = function(d){
                $scope.barXValue = d[0];
                $scope.barYValue = d[1];
                $scope.$apply();
            };

            // Random data function
            function randomData(){
                return d3.range(~~(Math.random()*1)+2).map(function(d, i){return ~~(Math.random()*1000);});
            }
            $scope.data = randomData();
        });
        
    }()
);