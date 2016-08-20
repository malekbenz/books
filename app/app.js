
angular.module("pizzaApp",['ngRoute'])

        .config(function($routeProvider) {
            $routeProvider
            .when("/book/:id", {
                templateUrl : "views/book.html",
                controller : "book as vm"

            })
            .when("/:title/:page", {
                templateUrl : "views/main.html",
                controller : "main as vm"

            })
            .when("/", {
                templateUrl : "views/main.html",
                controller : "main as vm"

            })
            .otherwise({redirectTo:'/'});
            //  $locationProvider.html5Mode(true);
        });
