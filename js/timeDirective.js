var app = angular.module('timeApp');

app.directive('showTime', function () {
    
    return {
        restrict: "E",
        template: "<div> The current time is {{time}}",
        link: function(scope, elem, attrs) {
            var theDate = new Date();
            scope.time = theDate.toString();
        }
    }
    
});