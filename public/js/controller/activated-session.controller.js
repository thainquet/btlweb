// angular.module('QASystem')
// .controller('activatedSessionCtrl', ['$scope', 'PagerService', function($scope, PagerService) {
//   console.log("Here");
//   $scope.activatedSessionList = [
//     {name: "hoithao1", teacher: "Nguyen Van A", start: "",
//      end: "", detail: '', questionNum: 10,close_at: "01/06/2018"},
//     {
//       name: "hoithao1",
//       teacher: "Nguyen Van B",
//       start: "",
//       end: "",
//       detail: '',
//       questionNum: 10,
//       close_at: "01/06/2018",
//     },
//      {
//        name: "hoithao2",
//        teacher: "Nguyen Van B",
//        start: "",
//        end: "",
//        detail: '',  
//        questionNum: 10,
//        close_at: "01/06/2018",
//      },
//       {
//         name: "hoithao3",
//         teacher: "Nguyen Van B",
//         start: "",
//         end: "",
//         detail: '',
//         questionNum: 10,
//         close_at: "01/06/2018",
//       },
//        {
//          name: "hoithao3",
//          teacher: "Nguyen Van B",
//          start: "",
//          end: "",
//          detail: '',
//          questionNum: 10,
//          close_at: "01/06/2018",
//        },
//         {
//           name: "hoithao3",
//           teacher: "Nguyen Van B",
//           start: "",
//           end: "",
//           detail: '',
//           questionNum: 10,
//           close_at: "01/06/2018",
//         },
//   ];
//    $scope.ahihi = function() {
//      alert("ahihi");
//    }
//    $scope.pager = {};
//   $scope.setPage = function (page) {
//     if (page < 1 || page > $scope.pager.totalPages) {
//       return;
//     }
//     // get pager object from service
//     $scope.pager = PagerService.GetPager($scope.activatedSessionList.length, page);
//     // get current page of items
//     $scope.items = $scope.activatedSessionList.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
//   }
//    initController();

//    function initController() {
//      // initialize to page 1
//      $scope.setPage(1);
//    }
   
//   }
// ])

angular.module('QASystem')
.controller('activatedSessionCtrl', function($scope, $http, $window) {
    listEvents = [];
    $scope.listActivedEvents = [];
    $scope.listQuestions = [];
    $scope.showQuestions = false;
    $scope.showEvents = true;
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
  
    // Cai nay tra ve tat ca cac event da dong trong bang event
    $http.get('/events')
    .then(function successCallback(data) {
      console.log(data.data.data);
        listEvents = data.data.data;
        for(let i = 0 ; i < listEvents.length ; i++) {
          //console.log($scope.listEvents[i]);
            if(listEvents[i].status == 0) {
              //console.log(i);
              //console.log($scope.listSeminar[i]);
                $scope.listActivedEvents.push(listEvents[i]);
            }
        }
    }, function(err) {
        console.log(err);
    });

    // Lay tat ca cac cau hoi cua 1 event da dong
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
    
    // Mo lai 1 event da dong
    $scope.openSession = function(idEvent) {
      //console.log(idEvent);
      
      $http.put('/events/' + idEvent + '/open')
      .then(function successCallback(data) {
        if(data.data.success) {
          alert("Reopen event successfully!");
          $window.location.reload();
        } else {
          alert("Reopen event failed!");
        }
        // console.log(data);
      }, function(err) {
        console.log(err);
      })
    }
})