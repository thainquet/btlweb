angular.module('QASystem')
.controller('allQuestionCtrl', function($scope, $http) {
    $scope.listSeminar = [];
    $http.get('/events')
    .then(function successCallback(data) {
        //console.log(data.data.data);
        $scope.listSeminar = data.data.data;
        //console.log($scope.listquestion);
    }, function(err) {
        console.log(err);
    })
})