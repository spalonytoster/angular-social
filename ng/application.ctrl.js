angular.module('app')
.controller('ApplicationCtrl', function ($scope, $http, UserSvc) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user;
  });
  $scope.logout = function () {
    UserSvc.logout();
    delete $scope.currentUser;
    delete window.localStorage.token;
  };

  if (window.localStorage.token) {
    console.log(window.localStorage.token);
    $http.defaults.headers.common['X-auth'] = window.localStorage.token;
    UserSvc.getUser()
    .success(function (response) {
      console.log(response);
      $scope.currentUser = response;
    });
  }
});
