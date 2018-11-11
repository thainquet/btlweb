angular.module('QASystem')
.directive('loginHeader', function() {
    return {
        restrict: 'EA',
        templateUrl: '../view/auth/loginHeader.view.html'
    }
});