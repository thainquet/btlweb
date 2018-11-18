angular.module('QASystem')
  .controller('allQuestionsCtrl',['$scope','$http','$window', function($scope, $http, $window) {
    $scope.questionList = [];
     $scope.isAdmin = function () {
       if ($window.sessionStorage['isAdmin'] == 1) return true;
       return false;
     }
     $scope.isTeacher = function () {
       if ($window.sessionStorage['isTeacher'] == 1) return true;
       return false;
     }
     $scope.isStudent = function () {
       if ($window.sessionStorage['isTeacher'] == 1 || $window.sessionStorage['isAdmin'] == 1) return false;
       return true;
     }
    $http.get('/events/questions/getAll').then(function successCallBack(data) {
        $scope.questionList = data.data.data;
        console.log($scope.questionList);
    },
    function errorCallBack(error) {
      console.log(error);
    } 
    );
    $scope.deleteQuestion = function (idEvent, idQuestion) {
      $http.delete('/events/' + idEvent + '/questions/delete/' + idQuestion)
        .then(function successCallback(data) {
          console.log(data);
          for (let i = 0; i < $scope.questionList.length; i++) {
            if ($scope.questionList[i].idQuestion == idQuestion) {
              $scope.questionList.splice(i, 1);
            }
          }
          alert("delete success");
        }, function (err) {
          console.log(err);
        })
    }
  }])

