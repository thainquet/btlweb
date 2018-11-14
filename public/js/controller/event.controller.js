angular.module('QASystem')
.controller('eventCtrl', function($scope, $http, $window) {
    $scope.listEvents = [];
    $scope.listActivingEvents = [];
    $scope.listActivedEvents = [];

    // Cai nay tra ve tat ca cac event trong bang event
    $http.get('/events')
    .then(function successCallback(data) {
        console.log(data);
        //console.log(data.data.data);
        $scope.listEvents = data.data.data;
    }, function(err) {
        console.log(err);
    });

    // Cai nay tra ve event theo id cua no
    getEventById = function (eventID) {
        $http.get('/events/' + eventID)
        .then(function successCallback(data) {
            
            console.log(data);
        }, function(err) {
            console.log(err);
        })
    }

    // Tra ve list cau hoi cua user hien tai
    $scope.user = JSON.parse($window.sessionStorage['user']);
    $scope.UserQuestion = function(id) {
        $http.get('/accounts/' + id + '/myquestions')
        .then(function successCallback(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        })
    }
})