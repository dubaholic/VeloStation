angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
       

      .state('tabsController', {
    url: '/TabControl',
    templateUrl: 'templates/tabsController.html',
    abstract:true,
    
  })

  .state('tabsController.map', {
    url: '/Map',
    views: {
      'tab1': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tabsController.table', {
    url: '/Table',
    views: {
      'tab2': {
        templateUrl: 'templates/table.html',
        controller: 'VeloCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/TabControl/Table')


});