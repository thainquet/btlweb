angular.module('QASystem')
  .controller('questionListCtrl', function ($scope, $http, $routeParams) {
    $scope.questionList = [];
    $scope.id = $routeParams.idUser;
    console.log($scope.id);
    $http.get("/accounts/" + $scope.id + "/myquestions")
      .then(function successCallBack(data) {
        console.log(data.data.data);
        $scope.questionList = data.data.data;
      }, function (err) {
        console.log(err);
    })
})  



