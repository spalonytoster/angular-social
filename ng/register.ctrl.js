angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {

  $scope.message = {};

  messages = {
    success: { severity: 'success', body: 'Registration successful!' },
    error: { severity: 'error', body: 'Registration unsuccessful.' }
  };

  $scope.register = function (username, password) {
    UserSvc.createUser(username, password)
      .success(function (response) {
        $scope.message = messages.success;
      })
      .error(function (response) {
        $scope.message = messages.error;
      });
  };
});
