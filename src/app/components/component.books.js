(function () {
    "use strict";

    function controller() {
        
    };
    angular.module("app")
        .component("component.books", {
            templateUrl: "views/component.books.html",
            controller: controller,
            controllerAs: "vm",
            bindings:
            {
                books: "<",
                pages: "<"
            }
        });
} ());