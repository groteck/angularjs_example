angular.module('angularExample', [])

window.PostListController = ($scope, $http) ->
	url="http://blog-test-angularjs.herokuapp.com/posts.json"
	
	$http.get(url).success (json) ->
		$scope.posts = json
	
angular.bootstrap document, ['angularExample']
