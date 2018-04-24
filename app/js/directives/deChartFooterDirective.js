(function () {
    'use strict';
  
    angular.module('d3Chart.directives')
        .directive('d3ChartFooter', function(){
            return {
                restrict: 'E',
                replace: true,
                controller: function d3Ctrl($scope) {
                    $scope.update = function(d, i){                         
                        $scope.data = updateData();
                        $scope.data[0] = $scope.xvalue;
                        $scope.data[1] = $scope.yvalue;
                    };

                    function updateData(){
                        return d3.range(~~(Math.random()*2)+1).map(function(d, i){});
                    }
                },
                template: '<div class="chart-form">' +
                        '<br /><p>Hovered bar data: <span class="hover-data">{{barValue}}</span></p>' +
                        '<br /><p>X Value: <input type="number" ng-maxlength="5" max="99999" ng-model="xvalue"><span class="invalid-text">Please enter bumber below 5 digit</span></p>' +
                        '<br /><p>Y Value: <input type="number" ng-maxlength="5" max="99999" ng-model="yvalue"><span class="invalid-text">Please enter bumber below 5 digit</span></p>' + 
                        '<br /><button ng-click="update()">Update Data</button></div>'
            };
        });
    }()
);