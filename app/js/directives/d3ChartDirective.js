
(function () {
    'use strict';
  
    angular.module('d3Chart.directives')
        .directive('d3Chart', function(){
            var chart = d3.custom.d3Chart();
                return {
                    restrict: 'E',
                    replace: true,
                    template: '<div class="chart"></div>',
                    scope:{
                        data: '=data',
                        hovered: '&hovered'
                    },
                    link: function(scope, element, attrs) {
                        var chartEl = d3.select(element[0]);
                        
                        // Pass hover data to footer as args
                        chart.on('customHover', function(d, i){
                            scope.hovered({args:d});
                        });

                        // Create chart with data
                        scope.$watch('data', function (newVal, oldVal) {
                            chartEl.datum(newVal).call(chart);
                        })
                    }
                };
            }
        );
    }()
);