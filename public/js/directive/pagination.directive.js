angular.module('QASystem')
  .directive('itemPagination', function () {
    return {
      restrict: 'EA',
      templateUrl: '../view/pagination.view.html'
    }
  })
