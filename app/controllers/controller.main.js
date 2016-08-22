(function () {
    "use strict";

    angular.module("app")

        .controller("controller.main", controller);

    controller.$inject = ["$http", "dataservice", "$routeParams",];

    function controller($http, dataservice, $routeParams) {
        var self = this;

        self.books = [];
        self.searchTerm = $routeParams.title || "javascript";
        var pageSearch = $routeParams.page;

        self.pages = {
            total: 0,
            current: ($routeParams.page || 1),
            activePages: []
        };

        var title = self.searchTerm;

        var url = "http://it-ebooks-api.info/v1/search/" + title;

        if (pageSearch) {
            url = url + "/page/" + pageSearch;
        }

        self.search = function () {
            var url = "http://it-ebooks-api.info/v1/search/" + self.searchTerm;
            dataservice.getBooks(self.searchTerm)
                .then(function success(response) {

                    console.log("response ", response );
                    self.books = response.Books;
                    self.pages.total = Math.floor(response.Total / 10) + 1;
                    self.pages.current = response.Page;
                    self.pages.time = response.Time;

                });

            // $http.get(url).then(
            //     function success(response) {
            //         self.books = response.data.Books;
            //         self.pages.total = Math.floor(response.data.Total / 10) + 1;
            //         self.pages.current = response.data.Page;
            //         self.pages.time = response.data.Time;

            //     },
            //     function error(err) {
            //         console.log(err);
            //     }
            // );

        };
        
        $http.get(url).then(
            function success(response) {
                self.books = response.data.Books;
                self.pages.total = Math.floor(response.data.Total / 10) + 1;

            },
            function error(err) {
                console.log(err);
            }
        );

        self.tables = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


    };
} ());        