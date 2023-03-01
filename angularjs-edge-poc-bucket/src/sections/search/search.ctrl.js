'use strict';
angular
    .module('app.core')
    .controller('SearchController', function($location, $scope, $routeParams, ShowService, PageValues) {
        //Set page title and description
        PageValues.title = "SEARCH";
        PageValues.description = "Search for your favorite TV shows.";
        //Setup view model object
        var vm = this;
        vm.query = null;
        vm.shows = [];
        vm.loading = null;
        vm.setSearch = function() {
            var query = encodeURI(vm.query);
            $location.path('/search/' + query);
        };
        vm.performSearch = function(query) {
            vm.loading = true;
            ShowService.search(query).then(function(response){
                vm.shows = response;
                vm.loading = false;
            });
        };
        if (typeof $routeParams.query != "undefined") {
            vm.performSearch($routeParams.query);
            vm.query = decodeURI($routeParams.query);
        }

        $scope.init = function () {
            if (window.location.href.includes("localhost")) {
                window.location.assign("http://localhost:8080/#/search");
            } else {
                document.cookie = "origin=A";
                document.location.reload();
            }
        }
    });