angular.module('QASystem')
.controller('activatedSessionCtrl', ['$scope', function($scope) {
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
  ];
   $scope.ahihi = function() {
     alert("ahihi");
   }
   $scope.filteredActivatedSessionList = [], $scope.currentPage = 1, $scope.numPerPage = 3, $scope.maxSize = 5;
   $scope.$watch('currentPage + numPerPage', function () {
     var begin = (($scope.currentPage - 1) * $scope.numPerPage),
       end = begin + $scope.numPerPage;

     $scope.filteredActivatedSessionList= $scope.activatedSessionList.slice(begin, end);
   });
}])