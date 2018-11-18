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
    let idUser = $window.sessionStorage['idUser'];
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
    $scope.back = function () {
      $scope.showQuestions = !$scope.showQuestions;
      $scope.showEvents = true;
    }
    // Cai nay tra ve tat ca cac event hoat dong trong bang event
    $http.get('/events')
      .then(function successCallback(data) {
        $scope.listEvents = data.data.data;
        // console.log($scope.listEvents);
        // console.log(data);
        for (let i = 0; i < $scope.listEvents.length; i++) {
          if ($scope.listEvents[i].status == 1) {
            //console.log(i);
            $scope.listActivingEvents.push($scope.listEvents[i]);
          }
        }
      }, function (err) {
        console.log(err);
      });

    $scope.getEventById = function (idEvent) {
      $http.get('/events/' + idEvent)
        .then(function successCallback(data) {
          //  $scope.showEvents = false;
          //  $scope.showQuestions = true;
          // console.log("HUy");
          console.log(data);
          $scope.eventDetail = data.data.data[0];
        }, function (err) {
          console.log(err);
        })
    }
    // Tra ve tat ca cau hoi theo id cua event
    $scope.getQuestions = function (idEvent) {
      $http.get('/events/' + idEvent + '/questions')
        .then(function successCallback(data) {
          $scope.showEvents = false;
          $scope.showQuestions = true;
          //console.log(data.data.data);
          $scope.listQuestions = data.data.data;
        }, function (err) {
          console.log(err);
        })
      $scope.getEventById(idEvent);

    }
    // Dong 1 event dang hoat dong
    $scope.closeEvent = function (idEvent) {
      for (let i = 0; i < $scope.listActivingEvents.length; i++) {
        if ($scope.listActivingEvents[i].idEvent == idEvent) {
          $scope.listActivingEvents.splice(i, 1);
        }
      }
      $http.put('/events/' + idEvent + '/close')
        .then(function successCallback(data) {
          alert('close successful');
        }, function (err) {
          console.log(err);
        })
    }

    // Tao 1 cau hoi moi cho event
    $scope.onCreateNewQuestion = function(idEvent) {
      createNewQuestion(idEvent);
    }

    //let idUser = $window.sessionStorage['idUser'];
    //console.log(user);
    $scope.newQuest = {
      id_user: idUser,
      content: ""
    }

    $scope.createNewQuestion = function (idEvent) {
      //console.log(idEvent);
      $http.post('/events/' + idEvent + '/questions/newQuestion', $scope.newQuest)
        .then(function successCallback(data) {
          $scope.getQuestions(idEvent);
          // console.log(data);
          // $http.get('/events/' + idEvent + '/questions')
          // .then(function successCallback(data) {
          //   $scope.showEvents = false;
          //   $scope.showQuestions = true;
          //   console.log(data.data.data);
            //$scope.listQuestions = data.data.data;
          // }, function (err) {
          //   console.log(err);
          // })
          //$scope.getEventById(idEvent);
        }, function (err) {
          console.log(err);
        })
    }

    // Xoa 1 cau hoi cua 1 Event
    $scope.deleteQuestion = function (idEvent, idQuestion) {
      $http.delete('/events/' + idEvent + '/questions/delete/' + idQuestion)
        .then(function successCallback(data) {
          console.log(data);
          for (let i = 0; i < $scope.listQuestions.length; i++) {
            if ($scope.listQuestions[i].idQuestion == idQuestion) {
              $scope.listQuestions.splice(i, 1);
            }
          }
          alert("delete success");
        }, function (err) {
          console.log(err);
        })
    }

    // Xoa 1 Event
    $scope.deleteEvent = function (idEvent) {
      $http.delete('/events/'+ idEvent + '/delete')
        .then(function successCallback(data) {
          console.log(data);
          for (let i = 0; i < $scope.listActivingEvents.length; i++) {
            if ($scope.listActivingEvents[i].idEvent == idEvent) {
              $scope.listActivingEvents.splice(i, 1);
            }
          }
          alert("delete success");
          window.onload;
        }, function (err) {
          console.log(err);
        })
    }

    // Tao 1 hoi thao moi
    
    $scope.newEvent = {
      content : "",
      id_user : idUser,
      name: "",
      type: "",
      status: 1
    }
    
    $scope.onCreateNewEvent = function() {
      createNewEvent();
      $scope.newEvent = {
        content : "",
        id_user : idUser,
        name: "",
        type: "",
        status: 1
      }
    }

    createNewEvent = function() {
      $http.post('/events/newEvents', $scope.newEvent)
      .then(function successCallback(data) {
        $timeout(function() {
          $http.get('/events')
          .then(function successCallback(data) {
            $scope.listEvents = data.data.data;
            // console.log($scope.listEvents);
            // console.log(data);
            for (let i = 0; i < $scope.listEvents.length; i++) {
              if ($scope.listEvents[i].status == 1) {
                //console.log(i);
                $scope.listActivingEvents.push($scope.listEvents[i]);
            }
          }
        }, function (err) {
          console.log(err);
      });

        })
      }, function(err) {
        console.log(err);
      })
    }
  })