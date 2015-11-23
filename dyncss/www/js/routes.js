angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    
      
    .state('menu', {
      url: '/sidemenu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
    
    .state('menu.home', {
      url: '/page5',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'menuCtrl'
        }
      }
    })
        
        
    .state('tabsController', {
      url: '/page8',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
      
    
      
        
    .state('tabsController.signup', {
      url: '/page6',
      views: {
        'tab5': {
          templateUrl: 'templates/signup.html',
          controller: 'signupCtrl'
        }
      }
    })
        
      
        
    .state('tabsController.login', {
      url: '/page7',
      views: {
        'tab4': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
    .state('tabsController.picture', {
      url: '/page5a',
      views: {
        'tab6': {
	    templateUrl: 'templates/picture.html',
	    controller: 'pictureCtrl'
        }
      }
    })
      
    
      
        
    .state('card', {
      url: '/page12',
      templateUrl: 'templates/card.html',
      controller: 'cardCtrl'
    })
        
      
        
    .state('list', {
      url: '/page13',
      templateUrl: 'templates/list.html',
      controller: 'listCtrl'
    })
        
        
    .state('text', {
      url: '/page14',
      templateUrl: 'templates/text.html',
      controller: 'textCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page8/page7');

});
