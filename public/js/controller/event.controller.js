angular.module('QASystem')
.controller('eventCtrl', function($scope, $routeParams) {
    $scope.event = {};
    $scope.eventID = $routeParams.id;
    $scope.questionsOfEventList = [];
    // Cai nay tra ve tat ca cac event trong bang event
    // $http.get('/events')
    // .then(function successCallback(data) {
    //     console.log(data);
    //     //console.log(data.data.data);
    //     $scope.listEvents = data.data.data;
    // }, function(err) {
    //     console.log(err);
    // });

    // Cai nay de lay danh sach cac phien hoi dap dang hoat dong va da hoat dong
    // classifySeminar = function() {
    //     for(i = 0 ; i < $scope.listEvents.length ; i++) {
    //         if($scope.listSeminar[i].status == 1) {
    //             $scope.listActivingEvents += $scope.listEvents[i];
    //         } else {
    //             $scope.listActivedEvents += $scope.listEvents[i];
    //         }
    //     }
    // }
    // Cai nay tra ve event theo id cua no
    $http.get('/events/' + $scope.eventID)
    .then(function successCallback(data) {
        //$scope.listQuestion = data.data
        $scope.event = data.data;
    }, function(err) {
        console.log(err);
    })
})