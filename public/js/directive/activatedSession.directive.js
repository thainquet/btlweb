angular.module('QASystem')
  .directive('activatedSession', function() {
    return {
      restrict: 'EA',
      templateUrl: '../view/activated-session.view.html'
    }
})