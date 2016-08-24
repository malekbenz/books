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
            saveBooks: saveBooks,
            getBook: getBook,
            saveBook: saveBook


        };
        function getBook(url) {
            return $localStorage[url];
        }
        function saveBook(url, book) {
            $localStorage[url] = book;
        }

        function getBooks(url) {
            return $localStorage[url];
        }
        function saveBooks(url, books) {
            $localStorage[url] = books;
        }


    };
})();