(function () {
    "use strict";

    angular.module("app")
    
        .controller("controller.main", controller);

    controller.$inject = ["$http", "$routeParams"];    

    function controller($http, $routeParams) {
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


        function setPages() {
            self.pages.activePages = [];
            var last = 10 + Math.floor(self.pages.current / 10) * 10;
            last = last < self.pages.total ? last : self.pages.total;

            var start = Math.floor(self.pages.current / 10) * 10;
            start = start > 0 ? start : 1;
            console.log("current page start ", start);
            console.log("current page end ", last);
            console.log("current page total ", self.pages.total);

            for (var i = start; i <= last; i++) {
                self.pages.activePages.push(i);
            }

        }

        var url = "http://it-ebooks-api.info/v1/search/" + title;


        if (pageSearch) {
            url = url + "/page/" + pageSearch;
        }

        self.search = function () {
            var url = "http://it-ebooks-api.info/v1/search/" + self.searchTerm;
            $http.get(url).then(
                function success(data) {
                    self.books = data.data.Books;
                    self.pages.total = Math.floor(data.data.Total / 10) + 1;
                    self.pages.current = data.data.Page;
                    self.pages.time = data.data.Time;

                    setPages();
                    console.log("Pages ", self.pages);
                    console.log("Books ", data);

                },
                function error(err) {
                    console.log(err);
                }
            );
        };

        $http.get(url).then(
            function success(data) {
                self.books = data.data.Books;
                self.pages.total = Math.floor(data.data.Total / 10) + 1;
                setPages();

            },
            function error(err) {
                console.log(err);
            }
        );

        self.tables = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


    };
} ())        