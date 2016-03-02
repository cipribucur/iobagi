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

.controller('AvatarsCtrl', function($scope) {
  $scope.avatars = [
    { title: 'Party Animallllll', id: 1 },
    { title: 'Cultural Guy', id: 2 },
    { title: 'History Geek', id: 3 },
    { title: 'Snoop Dogg', id: 4 }
  ];
})

.controller('LocationsCtrl', function($scope) {
  $scope.locations = [
    { title: 'Piața Unirii', id: 1 },
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
})

.controller('AvatarCtrl', function($scope, $stateParams) {
   $scope.avatar = [
    { title: 'Viata e mare!!!!', id: 1 },
    { title: 'e bine daca nu e rau', id: 2 }
  ];
});


