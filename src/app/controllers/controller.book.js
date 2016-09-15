(function () {
    "use strict";

    angular.module("app")
        .controller("controller.book", controller);

    controller.$inject = ["dataservice", "$routeParams"];

    function controller(dataservice, $routeParams) {
        var self = this;
        dataservice.getBook($routeParams.id)
            .then(function success(response) {
                self.book = response;
            },
            function error(err) {
                console.log(err);
            });
    }
} ());
