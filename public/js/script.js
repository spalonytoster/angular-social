var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope) {
  $scope.addPost = function () {
    if ($scope.postBody) {
      $scope.posts.unshift({
        username: 'dickeyxxx',
        body: $scope.postBody
      });
      $scope.postBody = null;
    }
  };

  $scope.posts = [
    {
      username: 'dickeyxxx',
      body: 'Node rządzi!'
    },
    {
      username: 'jeffdickey',
      body: 'Testujemy AngularJS...'
    }
  ];
});
