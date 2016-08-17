var app=angular.module("app",["ngRoute"]);angular.module("app").controller("ApplicationCtrl",["$scope","$http","UserSvc",function(o,e,t){o.$on("login",function(e,t){o.currentUser=t}),o.logout=function(){t.logout(),delete o.currentUser,delete window.localStorage.token},window.localStorage.token&&(console.log(window.localStorage.token),e.defaults.headers.common["X-auth"]=window.localStorage.token,t.getUser().success(function(e){console.log(e),o.currentUser=e}))}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(o,e){o.login=function(t,n,r){console.log(r),e.login(t,n,r).then(function(e){o.$emit("login",e.data)})}}]),app.controller("PostsCtrl",["$scope","PostsSvc",function(o,e){o.addPost=function(){o.postBody&&e.create({body:o.postBody}).success(function(e){o.postBody=null})},e.fetch().success(function(e){o.posts=e}),o.$on("ws:new_post",function(e,t){o.$apply(function(){o.posts.unshift(t)})})}]),app.service("PostsSvc",["$http",function(o){this.fetch=function(){return o.get("/api/posts")},this.create=function(e){return o.post("/api/posts",e)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(o,e){o.register=function(o,t){e.createUser(o,t).then(function(o){201===o.status?console.log("registration successful"):console.log("registration unsuccessful")})}}]),angular.module("app").config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(o){var e=this;e.getUser=function(){return o.get("/api/users")},e.login=function(t,n,r){return o.post("/api/sessions",{username:t,password:n}).then(function(t){return r&&(console.log("rememberMe - userSvc"),window.localStorage.token=t.data,console.log("token from localStorage: "+window.localStorage.token)),o.defaults.headers.common["X-auth"]=t.data,e.getUser()})},e.logout=function(){delete o.defaults.headers.common["X-auth"]},e.createUser=function(e,t){return o.post("/api/users",{username:e,password:t})}}]),angular.module("app").run(["$rootScope",function(o){var e="ws://"+window.location.host,t=new WebSocket(e);t.onopen=function(){console.log("Nawiązano połączenie z WebSocket.")},t.onmessage=function(e){var t=JSON.parse(e.data);o.$broadcast("ws:"+t.topic,t.data)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJlZ2lzdGVyLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyIsIndlYnNvY2tldHMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkaHR0cCIsIlVzZXJTdmMiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwibG9nb3V0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZ2V0VXNlciIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlbWVtYmVyTWUiLCJ0aGVuIiwiJGVtaXQiLCJkYXRhIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCIkYXBwbHkiLCJ1bnNoaWZ0Iiwic2VydmljZSIsInRoaXMiLCJnZXQiLCJyZWdpc3RlciIsImNyZWF0ZVVzZXIiLCJzdGF0dXMiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwiaHRtbDVNb2RlIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwidmFsIiwicnVuIiwiJHJvb3RTY29wZSIsInVybCIsImxvY2F0aW9uIiwiaG9zdCIsImNvbm5lY3Rpb24iLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwiJGJyb2FkY2FzdCIsInRvcGljIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLE9BQ0EsV0NEQUQsU0FBQUMsT0FBQSxPQUNBQyxXQUFB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RCxLQUFBLGFBQUEsU0FBQUMsR0FDQSxHQUFBQyxHQUFBLFFBQUE1QyxPQUFBNkMsU0FBQUMsS0FDQUMsRUFBQSxHQUFBQyxXQUFBSixFQUVBRyxHQUFBRSxPQUFBLFdBQ0E5QyxRQUFBQyxJQUFBLHNDQUdBMkMsRUFBQUcsVUFBQSxTQUFBakMsR0FDQSxHQUFBa0MsR0FBQUMsS0FBQUMsTUFBQXBDLEVBQUFBLEtBQ0EwQixHQUFBVyxXQUFBLE1BQUFILEVBQUFJLE1BQUFKLEVBQUFsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcclxuICAnbmdSb3V0ZSdcclxuXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsIFVzZXJTdmMpIHtcclxuICAkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gIH0pO1xyXG4gICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ291dCgpO1xyXG4gICAgZGVsZXRlICRzY29wZS5jdXJyZW50VXNlcjtcclxuICAgIGRlbGV0ZSB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLWF1dGgnXSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW47XHJcbiAgICBVc2VyU3ZjLmdldFVzZXIoKVxyXG4gICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gcmVzcG9uc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcclxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1lbWJlck1lKTtcclxuICAgIFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhcHAuY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgUG9zdHNTdmMpIHtcclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSlcclxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSBwb3N0cztcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHBvc3QpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhcHAuc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcbiAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XHJcbiAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgVXNlclN2Yy5jcmVhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAvLyBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcclxuICAgICAgICAgIC8vIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgLy8gICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RyYXRpb24gdW5zdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuICAkcm91dGVQcm92aWRlclxyXG4gICAgLndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnfSlcclxuICAgIC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnfSlcclxuICAgIC53aGVuKCcvbG9naW4nLCB7IGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJyk7XHJcbiAgfTtcclxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlck1lKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgIGlmIChyZW1lbWJlck1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbWVtYmVyTWUgLSB1c2VyU3ZjJyk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHZhbC5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZTogJyArIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHN2Yy50b2tlbiA9IHZhbC5kYXRhO1xyXG4gICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1hdXRoJ10gPSB2YWwuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWxldGUgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtYXV0aCddO1xyXG4gIH07XHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XHJcbiAgICB2YXIgdXJsID0gJ3dzOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOYXdpxIV6YW5vIHBvxYLEhWN6ZW5pZSB6IFdlYlNvY2tldC4nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZGF0YS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgbWVzc2FnZS50b3BpYywgbWVzc2FnZS5kYXRhKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
