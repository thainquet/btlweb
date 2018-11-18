angular.module('QASystem')
  .controller('userListCtrl', function ($scope, $http, $timeout) {
    $scope.userList = [];
    $scope.newUser = {
      username: "",
      password: "",
      email: "",
      isTeacher: 0,
      isAdmin: 0,
      isStudent: 0
    };
    // $scope.updatedUser = {
    //   username: "huy",
    //   password: "",
    //   email: "",
    //   isTeacher: 0,
    //   isAdmin: 0,
    //   isStudent: 0
    // }
    $scope.setUpdatedUser = function (id) { 
      $scope.userList.forEach(user => {
        if (user.id == id) {
          $scope.updatedUser = user;
          console.log("herere");
        }
      });
    }
    $scope.addAUser = function () {
      //console.log(idEvent);
      let a = {
        username: $scope.newUser['username'],
        password: $scope.newUser['password'],
        email: $scope.newUser['email'],
        isTeacher: $scope.newUser['isTeacher'] ? 1 : 0,
        isAdmin: $scope.newUser['isAdmin'] ? 1 : 0,
      }
      $http.post('/events/user/add', a)
        .then(function successCallback(data) {
          console.log(data);
        }, function (err) {
          console.log(err);
        })
      $scope.userList.push($scope.newUser);
    }
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
    $scope.updateUser = function () {
      let a = {
        id: $scope.updatedUser['id'],
        username: $scope.updatedUser['username'],
        password: $scope.updatedUser['password'],
        email: $scope.updatedUser['email'],
        isTeacher: $scope.updatedUser['isTeacher'] ? 1 : 0,
        isAdmin: $scope.updatedUser['isAdmin'] ? 1 : 0,
      }
       $http.post('/accounts/detail/change', a)
         .then(function successCallback(data) {
           console.log(data);
         }, function (err) {
           console.log(err);
         })
    }
  })