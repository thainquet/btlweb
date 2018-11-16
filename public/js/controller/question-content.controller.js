angular.module('QASystem')
.controller('questionContentCtrl', function($scope, $window, $routeParams, $http, $timeout) {
    let idQuest = $routeParams.idQuestion;
    let user = JSON.parse($window.sessionStorage['user']);
    let idUser = {
        id_user: user.id
    };
    let eventStatus = 0;
    //$scope.isActivingSession = true;
    $scope.like = 0;
    $scope.dislike = 0;

    // Lay trang thai dong/mo cua event bang questionid 
    $http.get('/events/questions/' + idQuest + '/status')
    .then(function successCallback(data) {
        //console.log(data.data.message[0].status);
        eventStatus = data.data.message[0].status;
        //console.log(eventStatus);
    }, function(err) {
        console.log(err);
    })

    // Kiem tra xem cau hoi co phai cua phien hoi dap dang hoat dong khong
    $scope.isActivingSession = function() {
        if(eventStatus == 1) {
            return true;
        } else {
            return false;
        }
    }

    // Ham lay cau hoi bang id cua no
    $scope.question = [];
    $http.get('/event/questions/' + idQuest)
    .then(function successCallback(data) {
        $scope.question = data.data.message[0]
        //console.log($scope.question.contentQuest);
        }, function(err) {
        console.log(err);
    })

    // Lay so like cua cau hoi bang ID cua no
    getLikesByQuestionID = function() {
        $http.get('/events/questions/getLikes/' + idQuest)
        .then(function successCallback(data) {
            $scope.like = data.data.total_like;
            console.log(data.data);
        }, function(err) {
            console.log(err);
        })
    }

    // Ham tang like khi click vao nut like
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

    // Ham tang dislike khi click vao nut dislike
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
    // Ham lay tat ca cac comment cua 1 cau hoi
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
    // Ham tao 1 comment moi
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

    // Su kien khi click vao nut comment
    $scope.onSubmit = function() {
        createNewComment();
        $scope.cmt = {
            content : ""
        }
    }

})