app.controller('PostsCtrl', function ($scope, PostsSvc) {

  $scope.messages = {};

  messages = {
    unauthorized: { severity: 'error', body: "You have to login in order to publish posts!" }
  };

  $scope.addPost = function () {
    if ($scope.postBody) {
      PostsSvc.create({
        body: $scope.postBody
      })
      .success(function (post) {
        $scope.messages = [];
        $scope.postBody = null;
      })
      .error(function () {
        if ($scope.messages.contains) {

        }
        $scope.messages.unauthorized = messages.unauthorized;
      });
    }
  };

  PostsSvc.fetch().success(function (posts) {
    $scope.posts = posts;
  });

  $scope.$on('ws:new_post', function (_, post) {
    $scope.$apply(function () {
      $scope.posts.unshift(post);
    });
  });
});
