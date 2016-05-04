// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
   .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  })

  .state('app.options', {
    url: '/options',
    views: {
      'menuContent': {
        templateUrl: 'templates/options.html',
        controller: 'OptionsCtrl'
      }
    }
  })
  
  .state('app.locations', {
      url: '/locations',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations.html',
          controller: 'LocationsCtrl'
        }
      }
    })
    
  .state('app.location', {
    url: '/location/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'templates/location.html',
        controller: 'LocationCtrl'
      }
    }
  })  

  .state('app.avatars', {
    url: '/avatars',
    views: {
      'menuContent': {
        templateUrl: 'templates/avatars.html',
        controller: 'AvatarsCtrl'
      }
    }
  })

  .state('app.avatar', {
    url: '/avatar/:avatarId',
    views: {
      'menuContent': {
        templateUrl: 'templates/avatar.html',
        controller: 'AvatarCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
});
