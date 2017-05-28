//2017/3.3
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
                title: 'News Item1', img: 'http://lorempixel.com/400/200/', date: 1469959781804, description: 'Description 1 Note: ng-click needs to call a function, or execute some code. You could write a function literal to set the property, but this is mixing controller logic into the view (think about what would happen if the sort needed to change later, you would need to update that logic in the view, which is bad).I added a sort function to handle this, that just takes the property. You can set this up however you need to'
            }, {
                title: 'News Item2', img: 'http://lorempixel.com/400/200/food', date: 1468029434776, description: 'Description 2 Note: ng-click needs to call a function, or execute some code. You could write a function literal to set the property, but this is mixing controller logic into the view (think about what would happen if the sort needed to change later, you would need to update that logic in the view, which is bad).I added a sort function to handle this, that'
            }, {
                title: 'News Item3', img: 'http://lorempixel.com/400/200/sports', date: 1469192218634, description: 'Description 3 I added a sort function to handle this, that just takes the property. You can set this up however you need to'
            }, {
                title: 'News Item4', img: 'http://lorempixel.com/400/200/people', date: 1469157574527, description: 'Description 4'
            }];

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

        $scope.sortFactor = 'title';
        $scope.currentNews = 0;
        $scope.visibleDescription = true;

        $scope.changeCurrentView = function(index) {
            if(index == $scope.currentNews) {
                $scope.visibleDescription = !$scope.visibleDescription;
            } else {
                $scope.visibleDescription = true;
            }
            $scope.currentNews = index;
        }

        $scope.showDate = function(d) {
            var date = new Date(d);
            return date.getFullYear() + ' / ' + (date.getMonth() + 1) + ' / ' + (date.getDay() + 1);
        }
    })