// angular.module('QASystem')
// .controller('activatingSessionCtrl', ['$scope', '$http', function($scope, $http) {
  // console.log("here2");
  // $scope.activatingSessionList = [{
  //     name: "hoithao1",
  //     teacher: "Nguyen Van A",
  //     start: "",
  //     end: "",
  //     detail: '',
  //     questionNum: 10,
  //   },
  //   {
  //     name: "hoithao1",
  //     teacher: "Nguyen Van B",
  //     start: "",
  //     end: "",
  //     detail: '',
  //     questionNum: 10,
  //   },
  //   {
  //     name: "hoithao2",
  //     teacher: "Nguyen Van D",
  //     start: "",
  //     end: "",
  //     detail: '',
  //     questionNum: 10,
  //   },
  //   {
  //     name: "hoithao3",
  //     teacher: "Nguyen Van B",
  //     start: "",
  //     end: "",
  //     detail: '',
  //     questionNum: 9,
  //   },
  // ];
  
// }])

angular.module('QASystem')
.controller('activatingSessionCtrl', function($scope, $http, $window, $timeout) {
    $scope.listEvents = [];
    $scope.listActivingEvents = [];
    $scope.showEvents = true;
    $scope.showQuestions = false;
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

    // Cai nay tra ve tat ca cac event dang hoat dong trong bang event
    $http.get('/events')
    .then(function successCallback(data) {
        $scope.listEvents = data.data.data;
        // console.log($scope.listEvents);
        // console.log(data);
        for(let i = 0 ; i < $scope.listEvents.length ; i++) {
            if($scope.listEvents[i].status == 1) {
                console.log(i);
                $scope.listActivingEvents.push($scope.listEvents[i]);
            }
        }
    }, function(err) {
        console.log(err);
    });  

    
    // Tra ve tat ca cau hoi theo id cua event
    $scope.getQuestions = function(idEvent) {
        $http.get('/events/' + idEvent +'/questions')
        .then(function successCallback(data) {
            $scope.showEvents = false;
            $scope.showQuestions = true;
            //console.log(data.data.data);
            $scope.listQuestions = data.data.data;
        }, function(err) {
            console.log(err);
        })
      }

    // Dong 1 event dang hoat dong
    $scope.closeEvent = function(idEvent) {
        for (let i = 0; i < $scope.listActivingEvents.length; i++) {
          if ($scope.listActivingEvents[i].idEvent == idEvent) {
            $scope.listActivingEvents.splice(i,1);
          }
        }
        $http.put('/events/' + idEvent + '/close')
        .then(function successCallback(data) {
            alert('close successful');
        }, function(err) {
            console.log(err);
        })
    }

    // Tao 1 cau hoi moi cho event
    let user = JSON.parse($window.sessionStorage['user']);
    //console.log(user.id);
    $scope.newQuest = {
        id_user : user.id,
        content : ""
    }

    createNewQuestion = function(idEvent) {
        $http.post('/events/' + idEvent + '/questions/newQuestion', $scope.newQuest)
        .then(function successCallback(data) {
            // $timeout(function() {
            //     $scope.getQuestions(idEvent);
            //     }, function errCallback(err) {
            //         console.log(err);
            //     })  
                console.log(data.data);
                // console.log(idEvent);
                //$scope.comments.push(data.data.content);
                //console.log($scope.comments);
            })
        }, function errCallback(err) {
            console.log(err);
    }

    $scope.onCreateNewQuest = function(idEvent) {
        createNewQuestion(idEvent);
    }

    // Xoa 1 cau hoi cua 1 Event
    $scope.deleteQuestion = function(idEvent, idQuestion) {
        $http.delete('/events/' + idEvent + '/questions/delete/' + idQuestion)
        .then(function successCallback(data) {
            console.log(data);
            alert("delete success");
        }, function(err) {
            console.log(err);
        })
    }
})