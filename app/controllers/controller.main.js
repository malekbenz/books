(function () {
    "use strict";

    angular.module("app")

        .controller("controller.main", controller);

    controller.$inject = ["dataservice", "$routeParams", "$location"];

    function controller(dataservice, $routeParams, $location) {
        var self = this;

        self.pages = {};
        self.search = searchBook;
        init();

        function searchBook() {
            // $location.path('/' + self.pages.query);
            $location.path('/');
        };

        function init() {

            self.books = [];
            self.pages.total = 0;
            self.pages.current = $routeParams.page || 1;
            self.pages.activePages = [];
            self.pages.query = $routeParams.query || "javascript";

            dataservice
                .getBooks(self.pages.query, self.pages.current)
                .then(success, error);
        };

        function success(response) {

            self.books = response.Books;
            self.pages.total = Math.floor(response.Total / 10) + 1;
            self.pages.current = response.Page;

            self.pages.time = response.Time || 0;

        };

        function error(err) {
            console.log(err);
        };

        self.tables = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


    };
} ());        