(function () {
    "use strict";

    angular.module("pizzaApp")
        .controller("controller.book", controller);

    controller.$inject = ["$http", "$routeParams"];

    function controller($http, $routeParams) { 

        var self = this;
        var url = "http://it-ebooks-api.info/v1/book/" + $routeParams.id;

        $http.get(url).then(
            function success(data) {
                self.book = data.data;
                // console.log(self.book);
            },
            function error(err) {
                console.log(err);
            }
        );
    }
}());
