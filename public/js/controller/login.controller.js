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

    function doLogin() {
      $http.post('/login', $scope.user)
        .then(function successCallback(data) {
          console.log("Data: " + data);
          console.log("Type: " + typeof data);
          if (data.data.success) {
            $window.sessionStorage['user'] = JSON.stringify($scope.user);
            $window.sessionStorage['isAdmin'] = (data.data.data.isAdmin);
            $window.sessionStorage['isTeacher'] = (data.data.data.isTeacher);
            $window.sessionStorage['idUser'] = (data.data.data.id);
            console.log("here " + $window.sessionStorage['user']);
            console.log("here " + $window.sessionStorage['isAdmin']);
            console.log("here " + $window.sessionStorage['idUser']);
            // console.log(data.data.data);
            //console.log("a" + user);
            $location.path('/home');  
          } else {
            alert('username or password is incorrect');
          }
        }, function errorCallback(err) {
          console.log(err);
        });
    }

  })