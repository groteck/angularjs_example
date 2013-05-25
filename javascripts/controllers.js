(function() {

  angular.module('angularExample', []);

  window.PostListController = function($scope, $http) {
    var url;
    url = "http://blog-test-angularjs.herokuapp.com/posts.json";
    return $http.get(url).success(function(json) {
      return $scope.posts = json;
    });
  };

  angular.bootstrap(document, ['angularExample']);

}).call(this);
