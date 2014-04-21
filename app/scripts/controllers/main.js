'use strict';

angular.module('sHeatmapApp')
    .controller('MainCtrl', function($scope) {
        function generateData(cols, rows, max) {
            var data = [],
                i;
            for (i = 0; i < 500; i += 1) {
                data.push([Math.random() * cols, Math.random() * rows, Math.random() * max]);
            }
            return data;
        }
        $scope.heatmap = {
            max: 100,
            cols: 68,
            rows: 40,
            data: generateData(68, 40, 100)
        }
    });