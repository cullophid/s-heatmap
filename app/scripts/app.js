'use strict';

angular
    .module('sHeatmapApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'sHeatmap',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });