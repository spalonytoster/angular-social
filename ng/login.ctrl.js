angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc) {
  $scope.login = function (username, password, rememberMe) {
    console.log(rememberMe);
    UserSvc.login(username, password, rememberMe)
      .then(function (response) {
        $scope.$emit('login', response.data);
      });
  };
});
