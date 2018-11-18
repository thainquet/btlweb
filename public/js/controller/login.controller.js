angular.module('QASystem')
  .controller('loginCtrl', function ($scope, $http, $location, $window) {
   
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
                //console.log(data.data);
                if(data.data.success) {
                    $location.path('/home');
                    $window.sessionStorage['user'] = JSON.stringify(data.data.data);
                    $window.sessionStorage['isAdmin'] = JSON.stringify(data.data.data.isAdmin);
                    $window.sessionStorage['isTeacher'] = JSON.stringify(data.data.data.isTeacher);
                    //console.log(data.data.data.id);
                } else {
                    alert('username or password is incorrect');
                }
            }, function errorCallback(err) {
                console.log(err);
            });
    }

  })