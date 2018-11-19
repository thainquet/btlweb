angular.module('QASystem')
  .directive('activatingSession', function() {
    return {
      restrict: 'EA',
      templateUrl: '../view/session/activating-session.view.html'
    }
})
