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
       name: "hoithao1",
       teacher: "Nguyen Van B",
       start: "",
       end: "",
       detail: '',
       questionNum: 10,
       close_at: "01/06/2018",
     }
  ]
}])