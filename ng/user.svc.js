angular.module('app')
.service('UserSvc', function ($http, $q) {
  var svc = this;

  svc.getUser = function () {
    return $http.get('/api/users');
  };
  svc.login = function (username, password, rememberMe) {
    return $http.post('/api/sessions', {
      username: username,
      password: password
    })
    .then(function (response) {
      if (rememberMe) {
        console.log('rememberMe - userSvc');
        window.localStorage.token = response.data;
        console.log('token from localStorage: ' + window.localStorage.token);
      }
      // svc.token = response.data;
      console.log('then: ' + response.data);
      $http.defaults.headers.common['X-auth'] = response.data;
      return svc.getUser();
    });
  };
  svc.logout = function () {
    delete $http.defaults.headers.common['X-auth'];
  };
  svc.createUser = function (username, password) {
    return $http.post('/api/users', {
      username: username,
      password: password
    });
  };
});
