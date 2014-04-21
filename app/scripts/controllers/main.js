'use strict';

angular.module('sHeatmapApp')
    .controller('MainCtrl', function($scope) {
        function generateData(cols, rows, max) {
            var data = [],
                max = (cols * rows) * 0.1,
                i;
            for (i = 0; i < max; i += 1) {
                data.push([Math.random() * cols, Math.random() * rows, Math.random() * max]);
            }
            return data;
        }
        $scope.heatmap = {
            max: 100,
            cols: 768,
            rows: 451
        }
        $scope.heatmap.data = generateData($scope.heatmap.cols, $scope.heatmap.rows, $scope.heatmap.max);
    });