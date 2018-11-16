angular.module('QASystem')
.controller('questionContentCtrl', function($scope, $window, $routeParams, $http, $timeout) {
    let idQuest = $routeParams.idQuestion;
    let user = JSON.parse($window.sessionStorage['user']);
    let idUser = {
        id_user: user.id
    };
    $scope.eventStatus = 0;
    //$scope.isActivingSession = true;
    $scope.like = 0;
    $scope.dislike = 0;

    $http.get('/events/questions/' + idQuest + '/status')
    .then(function successCallback(data) {
        //console.log(data.data.message[0].status);
        $scope.eventStatus = data.data.message[0].status;
        //console.log(eventStatus);
    }, function(err) {
        console.log(err);
    })

    // if(eventStatus === 1) {
    //     $scope.isActivingSession = true;
    //     //console.log(eventStatus)
    // } else {
    //     $scope.isActivingSession = false;
    // }

    getLikesByQuestionID = function() {
        $http.get('/events/questions/getLikes/' + idQuest)
        .then(function successCallback(data) {
            $scope.like = data.data.total_like;
            console.log(data.data);
        }, function(err) {
            console.log(err);
        })
    }

    $scope.addLike = function() { 
        $http.post('/events/questions/getLikes/' + idQuest + '/like', idUser)
        .then(function successCallback(data) {
            console.log(data.data);
            if(data.data.success) {
                $scope.like += 1;
            }
        }, function errCallback(err) {
            console.log(err);
        })
    }

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
         $timeout(function () {
            $scope.comments = data.data.message;
            console.log(data.data.message);
         })
        
    }, function errCallback(err) {
        console.log(err);
    })
    
    $scope.cmt = {
        content : ""
    }
    createNewComment = function() {
        $http.post('/events/questions/' + idQuest + '/newComment', $scope.cmt)
        .then(function successCallback(data) {
            $timeout(function() {
                $http.get('/events/questions/getAllComment/' + idQuest)
                .then(function successCallback(data) {
                    //$timeout(function () {
                        $scope.comments = data.data.message;
                        console.log(data.data.message);
                //})
        
            }, function errCallback(err) {
            console.log(err);
        })
                //console.log(data.data);
                //$scope.comments.push(data.data.content);
                console.log($scope.comments);
            })
        }, function errCallback(err) {
            console.log(err);
        })
    }

    $scope.onSubmit = function() {
        createNewComment();
        $scope.cmt = {
            content : ""
        }
    }

})