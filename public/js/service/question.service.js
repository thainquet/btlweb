angular.module('QASystem')
.service('questionService',['$http', function($http) {
    getAllLikesByQuestionID = function(idQuest, callback) {
        return $http.get('/events/questions/getLikes/' + idQuest)
        .then(function successCallback(data) {
            callback(data.data);
        }, function errCallback(err) {
            console.log(err);
        })
    }

    getAllCommentsByQuestionID = function(idQuest, callback) {
        return $http.get('/events/questions/getAllComment/' + idQuest)
        .then(function successCallback(data) {
            callback(data.data);
        }, function errCallback(err) {
            console.log(err);
        })
    }

    return {
        getAllLikesByQuestionID: getAllLikesByQuestionID,
        getAllCommentsByQuestionID: getAllCommentsByQuestionID
    }
}])