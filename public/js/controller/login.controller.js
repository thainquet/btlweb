angular.module('QASystem')
.controller('loginCtrl', function($scope, $http, $location, $window) {
    $scope.user = {
        username: "",
        password: ""
    };
    //console.log('abc');

    $scope.onSubmit = function () {
        //console.log('abc');
        doLogin();
    }

    function doLogin () {
        $http.post('/login', $scope.user)
            .then(function successCallback(data) {
                if(data.data.success) {
                    console.log(data);
                    $location.path('/home');
                    $window.sessionStorage['user'] = JSON.stringify(data.data.data);
                } else {
                    alert('username or password is incorrect');
                }
            }, function errorCallback(err) {
                console.log(err);
            });
    }
    
})