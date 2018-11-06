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
      console.log('ahhh');
        $http.post('/login', $scope.user)
            .then(function successCallback(data) {
              console.log('abc');
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