angular.module('QASystem')
.controller('homeCtrl', ['$scope', function($scope) {
    $scope.pageHeader = {
        title: "DANH SÁCH PHIÊN HỎI ĐÁP HOẠT ĐỘNG"
    };

    $scope.sessionList = [
        {title: 'Danh sách phiên hỏi đáp hoạt động', active: true},
        {title: 'Danh sách phiên hỏi đáp đã đóng', active: false},
        {title: 'Tất cả câu hỏi', active: false}
    ];

    $scope.titleDisplay = function(index) {
        $scope.pageHeader.title = $scope.sessionList[index].title.toUpperCase();
        $scope.sessionList[index].active = true;
        for(i = 0 ; i < 3 ; i++) {
            if(i != index) {
                $scope.sessionList[i].active = false;
            }
        }
    };
}]);

angular.module('QASystem')
.controller('navCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.name = "";

    $scope.isLoggedIn = function () {
        if ($window.localStorage['user']) {
            return true;
        } else {
            return false;
        }
    }

    if ($scope.isLoggedIn() == true) {
        console.log('loged in');
        let user = JSON.parse($window.localStorage['user']);
        $scope.name = user.username;
    } 
}]);
