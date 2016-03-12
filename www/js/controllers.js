angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.factory('Locations', function(){
  var locations = [
    { title: 'Piața Unirii', id: 1 ,info: 'Piața Unirii din Cluj, mai demult Piața Regele Matia, (în maghiară Mátyas Király tér), este punctul zero al municipiului Cluj-Napoca.'},
    { title: 'Piața Muzeului', id:2},
    { title: 'Blvd. Eroilor', id: 3},
    { title: 'Casa de Cultură', id: 4},
    { title: 'Teatrul Național', id: 5},
    { title: 'Opera Maghiară', id: 6},
    { title: 'Stadion "Cluj Arena"', id: 7},
    { title: 'Cetațuia', id: 8},
    { title: 'Piezișa', id: 9},
    { title: 'Grădina Botanică', id: 10},
    { title: 'Casa Tiff', id:11}
  ];
  
  return locations;
})

.controller('LocationsCtrl', function($scope, Locations) {
  $scope.locations = Locations;
})

.controller('LocationCtrl', function($scope, $stateParams, Locations) {
  var i = 0;
  angular.forEach(Locations, function(value, key){
      if (value.id == $stateParams.locationId) {
        $scope.location = value;
      }
  }, $scope.location);
})


.factory('Avatars', function(){
  var avatars =[
    { title: 'Party Animallllll', id: 1 },
    { title: 'Cultural Guy', id: 2 },
    { title: 'History Geek', id: 3 },
    { title: 'Snoop Dogg', id: 4 }
  ];
  
  return avatars;
  
})
.controller('AvatarsCtrl', function($scope, Avatars) {
  $scope.avatars = Avatars;
})

.controller('AvatarCtrl',  function($scope, $stateParams, Avatars) {
  var i = 0;
  angular.forEach(Avatars, function(value, key) {
      if (value.id == $stateParams.avatarId) {
        $scope.avatar = value;
      }
  }, $scope.avatar);
});




