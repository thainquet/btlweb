angular.module('QASystem')
  .controller('sessionListCtrl', function ($scope, $http, $routeParams) {
    $scope.sessionList = [];
    $scope.id = $routeParams.idUser;
    console.log($scope.id);
    $http.get("/accounts/" + $scope.id + "/myevents")
      .then(function successCallBack(data) {
        console.log(data.data.data);
        $scope.sessionList = data.data.data;
      }, function (err) {
        console.log(err);
      })
  })
