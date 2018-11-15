'use trict';

angular.module('QASystem', ['ngRoute',  'ui.bootstrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/auth/login.view.html',
    controller: 'loginCtrl'
  });

  $routeProvider.when('/home', {
    templateUrl: 'view/home.view.html',
    controller: 'homeCtrl'
  });

  $routeProvider.when('/question/:idQuestion', {
    templateUrl: 'view/question-content.view.html',
    controller: 'questionContentCtrl'
  });

}])

