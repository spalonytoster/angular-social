angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc) {
  $scope.login = function (username, password, rememberMe) {

    $scope.message = {};

    messages = {
      success: { severity: 'success', body: 'Login successful!' },
      error: { severity: 'error', body: 'Login unsuccessful! Check your username/password.' }
    };

    UserSvc.login(username, password, rememberMe)
      .then(function (response) {
        $scope.message = messages.success;
        $scope.$emit('login', response.data);
      }, function (response) {
          $scope.message = messages.error;
      });
  };
});
