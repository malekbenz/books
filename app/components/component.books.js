(function () {
    "use strict"
    function controller() {
        
    };
    angular.module("pizzaApp")
        .component("component.books", {
            templateUrl: "views/component.books.html",
            controller: controller,
            controllerAs: "vm",
            bindings:
            {
                books: "<",
                pages: "<",
                term: "<"
            },

        });
} ())