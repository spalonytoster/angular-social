angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (username, password) {
    UserSvc.createUser(username, password)
      .then(function (response) {
        if (response.status === 201) {
          // UserSvc.login(username, password)
          // .then(function (response) {
          //   $scope.$emit('login', response.data);
          // });
          console.log('registration successful');
        }
        else {
          console.log('registration unsuccessful');
        }
      });
  };
});
