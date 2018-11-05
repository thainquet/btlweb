angular.module('QASystem')
.controller('activedSessionCtrl', ['$scope', function($scope) {
    $scope.goto = function(session) {
        $location.path('' + session.name)
    }
    var init = function () {
        
    }
}])