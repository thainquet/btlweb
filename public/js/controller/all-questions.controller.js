angular.module('QASystem')
  .controller('allQuestionsCtrl',['$scope','$http', function($scope, $http) {
    $scope.questionList = [];
    $http.get('/events/questions/getAll').then(function successCallBack(data) {
        $scope.questionList = data.data.data;
        console.log($scope.questionList);
    },
    function errorCallBack(error) {
      console.log(error);
    } 
    );
  }])

