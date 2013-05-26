(function() {
  var blog;

  blog = angular.module('blog', ['ngResource']);

  blog.controller('PostsCtrl', [
    '$scope', 'Post', function($scope, Post) {
      $scope.posts = Post.query();
      return $scope.create = function() {
        return Post.save($scope.newPost, (function(resource) {
          $scope.posts.push(resource);
          return $scope.newPost = {};
        }), function(response) {
          return console.log("Error: " + response.status);
        });
      };
    }
  ]);

  blog.factory('Post', [
    '$resource', function($resource) {
      var url;
      url = "http://blog-test-angularjs.herokuapp.com/posts.json";
      return $resource(url);
    }
  ]);

}).call(this);
