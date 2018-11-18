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

// <<<<<<< HEAD
//     function doLogin () {
//         $http.post('/login', $scope.user)
//             .then(function successCallback(data) {
//                 //console.log(data.data);
//                 if(data.data.success) {
//                     $location.path('/home');
//                     $window.sessionStorage['user'] = JSON.stringify(data.data.data);
//                     $window.sessionStorage['isAdmin'] = JSON.stringify(data.data.data.isAdmin);
//                     $window.sessionStorage['isTeacher'] = JSON.stringify(data.data.data.isTeacher);
//                     //console.log(data.data.data.id);
//                 } else {
//                     alert('username or password is incorrect');
//                 }
//             }, function errorCallback(err) {
//                 console.log(err);
//             });
// =======
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