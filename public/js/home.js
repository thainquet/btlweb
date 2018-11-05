angular.module('QASystem')
.controller('homeCtrl', ['$scope', function($scope) {
    $scope.pageHeader = {
        title: "DANH SÁCH PHIÊN HỎI ĐÁP HOẠT ĐỘNG"
    };

    $scope.sessionList = [
        {title: 'Danh sách phiên hỏi đáp hoạt động'},
        {title: 'Danh sách phiên hỏi đáp đã đóng'},
        {title: 'Tất cả câu hỏi'}
    ];

    $scope.titleDisplay = function(index) {
        $scope.pageHeader.title = $scope.sessionList[index].title.toUpperCase();
    };
}])


