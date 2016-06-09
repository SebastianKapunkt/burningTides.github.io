var name_space = angular.module('burning_tides_app', []);

name_space.controller("TestFunction", ['$scope', '$http', function ($scope, $http) {
    $http.get('app/json/data.json').success(function (data) {
        $scope.test_var = data;
    });
    $scope.setCurrentNews = function (item){
        $scope.news_content = item.content;
        $scope.news_title = item.title;
        $scope.selection.selectedNode = item;
    };
}]);