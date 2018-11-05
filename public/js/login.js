angular.module('QASystem')
.controller('loginCtrl', function($scope, $http, $location, $window) {
    $scope.user = {
        username: "",
        password: ""
    };

    $scope.onSubmit = function () {
        doLogin();
    }

    function doLogin () {
        $http.post('/login', $scope.user)
            .then(function successCallback(data) {
                if(data.data.success) {
                    $location.path('/home');
                    $window.localStorage['user'] = JSON.stringify($scope.user);
                } else {
                    alert('username or password is incorrect');
                }
            }, function errorCallback(err) {
                console.log(err);
            });
    }

})