blog = angular.module('blog', ['ngResource'])

blog.controller('PostsCtrl', ['$scope', 'Post', ($scope, Post) ->
	$scope.posts = Post.query()

	$scope.create = ->
		Post.save $scope.newPost, ((resource) ->
			$scope.posts.push resource
			$scope.newPost = {}
		), (response) ->
			console.log "Error: " + response.status

])

blog.factory('Post', ['$resource', ($resource) ->
	url="http://blog-test-angularjs.herokuapp.com/posts.json"
	$resource(url)
])
