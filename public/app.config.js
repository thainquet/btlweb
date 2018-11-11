'use trict';

angular.module('QASystem', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/auth/login.view.html',
    controller: 'loginCtrl'
  });

  $routeProvider.when('/home', {
    templateUrl: 'view/home.view.html',
    controller: 'homeCtrl'  
  });

  $routeProvider.when('/register', {
    templateUrl: 'view/auth/register.view.html',
    controller: 'registerCtrl'
  });
  
}])

