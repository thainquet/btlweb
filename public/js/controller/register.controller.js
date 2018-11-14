angular.module('QASystem')
.controller('registerCtrl', function($scope, $window, $http) {
    $scope.name = "";
    $scope.id = "";
    $scope.isAdmin = "";
    $scope.isLoggedIn = function () {
        if ($window.sessionStorage['user']) {
            return true;
        } else {
            return false;
        }
    }

    if ($scope.isLoggedIn() == true) {
        let user = JSON.parse($window.sessionStorage['user']);
        $scope.name = user.username;
        $scope.id = user.id;
        $scope.isAdmin = user.isAdmin;
    };
    
    // userInfo chua username, email, isAdmin, isTeacher
    $scope.userInfo = [];
    $scope.checkInfoAccount = function(idUser) {
        $http.get('/accounts/detail/' + idUser)
        .then(function successCallback(data) {
            $scope.userInfo = data.data.data;
        }, function(err) {
            console.log(err);
        })
    }

    // Thay doi thong tin tai khoan
    $scope.changeInfoAccount = function(idUser) {
        $http.put('/accounts/detail/' + idUser + '/change')
        .then(function successCallback(data) {
            if(data.data.success) {
                alert("Change information successfullly!")
            } else {
                alert("Can't update your information");
            }
        }, function(err) {
            console.log(err);
        })
    }

    // Tao user
    $scope.createUser = function() {
        $http.post('/register')
        .then(function successCallback(data) {
            if(data.data.success) {
                alert("Create user successfully!");
            } else {
                alert("Create user failed!");
            }
        }, function(err) {
            console.log(err);
        })
    }
})