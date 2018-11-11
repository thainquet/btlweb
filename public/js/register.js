angular.module('QASystem')
.controller('registerCtrl', function($scope, $http) {
    $scope.user = {
        username: "",
        password: "",
        cf_password: ""
    };

    $scope.onSubmit = function() {
        $scope.formError = "";

        if($scope.user.password != $scope.user.cf_password) {
            $scope.formError = "Confirm password is not match, please try again!";
            return false;
        } else {
            doRegister();
            //console.log('abs');
        }
    }

    function doRegister() {
        $http.post('/register', $scope.user)
        .then(function successCallback(data) {
            if(data.data.success) {
                
            }
        })
    }
})