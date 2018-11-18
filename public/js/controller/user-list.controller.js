angular.module('QASystem')
  .controller('userListCtrl', function ($scope, $http) {
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
  })
