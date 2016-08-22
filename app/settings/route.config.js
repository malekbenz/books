(function () {
    "use strict";

    angular.module("app")
        .config(configure);

    configure.$inject = ["$routeProvider"];

    function configure($routeProvider) {
        $routeProvider
            .when("/book/:id", {
                templateUrl: "views/book.html",
                controller: "controller.book",
                controllerAs: "vm"

            })
            .when("/:title/:page", {
                templateUrl: "views/main.html",
                controller: "controller.main as vm",
                controllerAs: "vm"

            })
            .when("/", {
                templateUrl: "views/main.html",
                controller: "controller.main as vm",
                controllerAs: "vm"

            })
            .otherwise({ redirectTo: '/' });
        //  $locationProvider.html5Mode(true);
    }
} ())