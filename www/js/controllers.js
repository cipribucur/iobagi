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
    { title: 'Piața Unirii', id: 1 , info: 'Piața Unirii din Cluj, mai demult Piața Regele Matia, (în maghiară Mátyas Király tér), este punctul zero al municipiului Cluj-Napoca.'},
    { title: 'Piața Muzeului', id:2, info: 'Piata Muzeului a primit numele dupa Muzeul de Istorie al Transilvaniei care se afla in capatul acesteia.Piata a fost transformata in zona pietonala, unde pe timul verii sunt terase in aer liber si unde se organizeaza evenimente, mai ales in zona Casei Matei Corvin.'},
    { title: 'Blvd. Eroilor', id: 3, info: 'Bulevardul Eroilor este una dintre cele mai importante artere din Cluj-Napoca. '},
    { title: 'Casa de Cultură', id: 4, info: 'Situata in centrul orasului, Casa de Cultura a Studentilor este un spatiu destinat evenimentelor culturale, sociale si de petrecere a timpului liber.'},
    { title: 'Teatrul Național', id: 5, info: 'Clădirea Teatrului Național din Cluj este sediul companiei Teatrul Național „Lucian Blaga“ și al companiei Opera Română din Cluj.'},
    { title: 'Opera Maghiară', id: 6, info: 'Opera Maghiară de Stat din Cluj-Napoca este o companie națională de operă, înființată la 17 decembrie 1948. Clădirea s-a construit între anii 1909-1910, în locul unui teatru de vară ce data din anul 1874. Ansamblul are o capacitate de 1000 de locuri.'},
    { title: 'Stadion "Cluj Arena"', id: 7, info: 'Cluj Arena este un stadion din Cluj-Napoca, construit în 2011 pe locul fostului stadion Ion Moina.'},
    { title: 'Cetațuia', id: 8, info: 'Cetățuia (în maghiară Fellegvár) este o fortificație construită in perioada Habsburgică în vârful dealului cu același nume din Cluj-Napoca, în cartierul Gruia.'},
    { title: 'Piezișa', id: 9, info: 'Scurta descriere'},
    { title: 'Grădina Botanică', id: 10, info: 'Grădina Botanică „Alexandru Borza” a Universității Babeș-Bolyai din Cluj-Napoca, România a fost fondată în 1920 de profesorul Alexandru Borza.'},
    { title: 'Casa Tiff', id: 11, info: 'Casa TIFF este un centru cultural care isi propune sa promoveze educatia cinematografica si nevoie de exprimare prin arta, cultivand si dezvoltand randul clujenilor.'}
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




