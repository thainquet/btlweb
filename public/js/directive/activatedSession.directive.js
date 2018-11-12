angular.module('QASystem')
  .directive('activatedSession', function() {
    return {
      restrict: 'EA',
      templateUrl: '../view/session.view.html'
    }
})