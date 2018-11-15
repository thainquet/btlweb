angular.module('QASystem')
.controller('homeCtrl', ['$scope', '$window', function($scope, $window) {
    
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
    $scope.name = "";
    $scope.isLoggedIn = function () {
        if ($window.sessionStorage['user']) {
            //console.log("Ahihi: " + $window.sessionStorage['isAdmin']);
            return true;
        } else {
            return false;
        }
    }
    if ($scope.isLoggedIn() == true) {
        let user = JSON.parse($window.sessionStorage['user']);
        $scope.isAdmin = function() {
          if ($window.sessionStorage['isAdmin'] == 1) return true;
          return false;
        }
        $scope.isTeacher = function() {
          if ($window.sessionStorage['isTeacher'] == 1) return true;
          return false;
        }
        $scope.isStudent = function() {
           if ($window.sessionStorage['isTeacher'] == 1 || $window.sessionStorage['isAdmin'] == 1) return false;
           return true;
        }
        $scope.name = user.username;
    } 
}]);
