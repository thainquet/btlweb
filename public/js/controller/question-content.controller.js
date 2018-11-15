angular.module('QASystem')
.controller('questionContentCtrl', function($scope, $window, $routeParams, $http) {
    let idQuest = $routeParams.idQuestion;
    let user = JSON.parse($window.sessionStorage['user']);
    let idUser = {
        id_user: user.id
    };
    $scope.like = 0;
    $scope.dislike = 0;

    getLikesByQuestionID = function() {
        $http.get('/events/questions/getLikes/' + idQuest)
        .then(function successCallback(data) {
            $scope.like = data.data.total_like;
        }, function(err) {
            console.log(err);
        })
    }

    $scope.addLike = function() { 
        $http.post('/events/questions/getLikes/' + idQuest + '/like', idUser)
        .then(function successCallback(data) {
            if(data.data.success) {
                $scope.like += 1;
            }
        }, function errCallback(err) {
            console.log(err);
        })
    }
    console.log(idQuest);

   $scope.unLike = function() {
       $http.post('/events/questions/getLikes/' + idQuest + '/unlike', idUser)
       .then(function successCallback(data) {
           if($scope.like == 0) {
            $scope.dislike += 1;
           } else {
            $scope.dislike += 1;
            $scope.like -= 1;
           }
       }, function errCallback(err) {
           console.log(err);
       })
   }

   $scope.comments = [];
    $http.get('/events/questions/getAllComment/' + idQuest)
    .then(function successCallback(data) {
        $scope.comments = data.data.message;
        console.log(data.data.message);
    }, function errCallback(err) {
        console.log(err);
    })
})