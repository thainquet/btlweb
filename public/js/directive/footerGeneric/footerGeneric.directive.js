angular.module('QAController')
    .directive('footerGeneric', function () {
        return {
            restrict: 'EA',
            templateURL: './footerGeneric.template.html'
        };
    })