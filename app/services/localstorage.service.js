// storage.js
(function () {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage)


    storage.$inject = ['$localStorage'];

    function storage($localStorage) {
        return {
            message: message,
            getBooks: getBooks,
            setBooks: setBooks
        };

        function getBooks(url) {
            
            var result = $localStorage[url];
            return result;
        }
        function setBooks(url, books) {
            $localStorage[url] = books;
        }
        function message() {

            return $localStorage["http://it-ebooks-api.info/v1/search/javascript/page/1"];

        }


    };
})();