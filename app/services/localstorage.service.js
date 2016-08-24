// storage.js
(function () {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage)

    storage.$inject = ['$localStorage'];

    function storage($localStorage) {
        return {
            getBooks: getBooks,
            setBooks: setBooks
        };

        function getBooks(url) {
            return $localStorage[url];
        }
        function setBooks(url, books) {
            $localStorage[url] = books;
        }
        function message() {

            return $localStorage["http://it-ebooks-api.info/v1/search/javascript/page/1"];

        }


    };
})();