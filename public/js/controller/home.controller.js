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
    $scope.chooseTag = function(index) {
        $scope.sessionList[index].active = true;
        for(i = 0 ; i < 3 ; i++) {
            if (i != index) {
                $scope.sessionList[i].active = false;
            }
        }
    };
    $scope.isActive = function(index) {
      if ($scope.sessionList[index].active == true) {
        return true;
      }
      return false;
    }
    
}]);

angular.module('QASystem')
.controller('navCtrl', ['$scope', '$window', function($scope, $window) {
    // $scope.name = "";
    // $scope.isLoggedIn = function () {
    //     if ($window.sessionStorage['user']) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // if ($scope.isLoggedIn() == true) {
    //     let user = JSON.parse($window.sessionStorage['user']);
    //     $scope.name = user.username;
    // } 
}]);
