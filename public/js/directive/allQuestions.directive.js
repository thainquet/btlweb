angular.module('QASystem')
  .directive('allQuestions', function () {
    return {
      restrict: 'EA',
      templateUrl: '../view/question/question.view.html'
    }
  })
