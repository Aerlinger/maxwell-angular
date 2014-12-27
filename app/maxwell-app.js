angular.module('Maxwell', [
    'ui.router',
    'components',
    'circuit'
]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('default', {
        url: "/",
        abstract: true
    });
    $urlRouterProvider.otherwise('/');
});
