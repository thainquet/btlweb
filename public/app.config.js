'use trict';

angular.module('QASystem', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/login.view.html'
  });

  $routeProvider.when('/home', {
    templateUrl: 'view/home.view.html',
    controller: 'homeCtrl'  
  });
}])

