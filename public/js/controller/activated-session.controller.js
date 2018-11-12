angular.module('QASystem')
.controller('activatedSessionCtrl', ['$scope', 'PagerService', function($scope, PagerService) {
  console.log("Here");
  $scope.activatedSessionList = [
    {name: "hoithao1", teacher: "Nguyen Van A", start: "",
     end: "", detail: '', questionNum: 10,close_at: "01/06/2018"},
    {
      name: "hoithao1",
      teacher: "Nguyen Van B",
      start: "",
      end: "",
      detail: '',
      questionNum: 10,
      close_at: "01/06/2018",
    },
     {
       name: "hoithao2",
       teacher: "Nguyen Van B",
       start: "",
       end: "",
       detail: '',  
       questionNum: 10,
       close_at: "01/06/2018",
     },
      {
        name: "hoithao3",
        teacher: "Nguyen Van B",
        start: "",
        end: "",
        detail: '',
        questionNum: 10,
        close_at: "01/06/2018",
      },
       {
         name: "hoithao3",
         teacher: "Nguyen Van B",
         start: "",
         end: "",
         detail: '',
         questionNum: 10,
         close_at: "01/06/2018",
       },
        {
          name: "hoithao3",
          teacher: "Nguyen Van B",
          start: "",
          end: "",
          detail: '',
          questionNum: 10,
          close_at: "01/06/2018",
        },
  ];
   $scope.ahihi = function() {
     alert("ahihi");
   }
   $scope.pager = {};
  $scope.setPage = function (page) {
    if (page < 1 || page > $scope.pager.totalPages) {
      return;
    }
    // get pager object from service
    $scope.pager = PagerService.GetPager($scope.activatedSessionList.length, page);
    // get current page of items
    $scope.items = $scope.activatedSessionList.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
  }
   initController();

   function initController() {
     // initialize to page 1
     $scope.setPage(1);
   }
   
  }
])