angular.module('QASystem')
.controller('loginCtrl', function($scope, $http, $location, $window) {
    $scope.user = {
        username: "",
        password: ""
    };
    //console.log('abc');
    $scope.isAdmin = 0;
    $scope.isTeacher = 0;
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
                    $window.sessionStorage['user'] = JSON.stringify($scope.user);
                    $window.sessionStorage['isAdmin'] = JSON.stringify(data.data.data.isAdmin);
                    $window.sessionStorage['isTeacher'] = JSON.stringify(data.data.data.isTeacher);
                    console.log($window.sessionStorage['isTeacher']);
                } else {
                    alert('username or password is incorrect');
                }
            }, function errorCallback(err) {
                console.log(err);
            });
    } 
})