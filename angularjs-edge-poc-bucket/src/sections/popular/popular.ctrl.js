'use strict';
angular
    .module('app.core')
    .controller('PopularController', function($scope, PageValues, shows) {
        //Set page title and description
        PageValues.title = "POPULAR";
        PageValues.description = "The most popular TV shows.";
        //Setup view model object
        var vm = this;
        vm.shows = shows;

        $scope.init = function () {
            if (window.location.href.includes("localhost")) {
                window.location.assign("http://localhost:8080/#/popular");
            } else {
                document.cookie = "origin=A";
                document.location.reload();
            }
        }
    });