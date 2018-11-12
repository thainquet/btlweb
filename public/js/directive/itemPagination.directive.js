angular.module('QASystem')
  .directive('itemPagination', function () {
    return {
      restrict: 'EA',
      templateUrl: '../view/item-pagination.view.html'
    }
  })
