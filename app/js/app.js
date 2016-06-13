var name_space = angular.module('burning_tides_app', ['ngSanitize']);

name_space.controller("NewsController", ['$scope', '$http', function ($scope, $http) {
    $http.get('app/json/news_data.json').success(function (data) {
        $scope.news = data;
    });
    $scope.setCurrentNews = function (item){
        $scope.news_content = item.content;
        $scope.news_title = item.title;
        $scope.selection.selectedNode = item;
    };
}]);

name_space.controller("FeatureController", ['$scope', '$http', function($scope, $http) {
    $http.get('app/json/feature_data.json').success(function (data) {
        $scope.feature = data;
    });
}]);