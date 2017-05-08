angular.module('website', ['ngRoute', 'ui.bootstrap']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/screen/:symbol?', {templateUrl: 'partials/screen.html', controller: 'ScreenCtrl'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            otherwise({redirectTo: '/home'});
    })
    .controller('ScreenCtrl', function ($scope, $http, $routeParams) {
        $scope.message = $routeParams.symbol;
    })
    .controller('HomeCtrl', function ($scope, $http, $q, $location) {
        $scope.news = [
            {
                title: 'News Item1', img: 'http://lorempixel.com/400/200/'
            }, {
                title: 'News Item2', img: 'http://lorempixel.com/400/200/food'
            }, {
                title: 'News Item3', img: 'http://lorempixel.com/400/200/sports'
            }, {
                title: 'News Item4', img: 'http://lorempixel.com/400/200/people'
            }];
        $scope.currentNews = $scope.news[0].img;
        $scope.myInterval = 3000;
        $scope.slides = [
            {
              image: 'http://lorempixel.com/400/200/'
            },
            {
              image: 'http://lorempixel.com/400/200/food'
            },
            {
              image: 'http://lorempixel.com/400/200/sports'
            },
            {
              image: 'http://lorempixel.com/400/200/people'
            }
        ]; 

        $scope.changeCurrentView = function(img) {
            $scope.currentNews = img;
        }
    })