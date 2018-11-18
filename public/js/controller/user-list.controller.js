angular.module('QASystem')
  .controller('userListCtrl', function ($scope, $http, $timeout) {
    $scope.userList = [];
    $scope.role = function (isAdmin, isTeacher) {
      if (isAdmin == "1") return "Admin";
      else if (isTeacher == "1") return "Teacher";
      return "Student";
    }

    $http.get('/events/users/getAll')
      .then(function successCallback(data) {
        $scope.userList = data.data.data;
      }, function (err) {
        console.log(err);
      })

      $scope.newUser = {
        //id : "",
        username : "",
        email : "",
        password : "",
        isAdmin : '',
        isTeacher : ''
      }

      $scope.onCreateNewUser = function() {
        $scope.formError = "";
        if (!$scope.newUser.username || !$scope.newUser.email || 
          !$scope.newUser.password || !$scope.newUser.isAdmin || !$scope.newUser.isTeacher) {
            $scope.formError = "All fields required, please try again";
            return false;
        } else {
          createNewUser();
          $scope.newUser = {
            //id : "",
            username : "",
            email : "",
            password : "",
            isAdmin : '',
            isTeacher : ''
          }
        }
      }

      createNewUser = function() {
        $scope.formError = "";
        $http.post('/user/newUser', $scope.newUser)
        .then(function(data) {
          $timeout(function() {
            $http.get('/events/users/getAll')
            .then(function successCallback(data) {
                $scope.userList = data.data.data;
                //console.log(data);
            }, function (err) {
              console.log(err);
            })
          })
        })
      }
  })
