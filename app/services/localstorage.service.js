// storage.js
(function () {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage)
        .factory('myCache', myCache);

    myCache.$inject = ['$cacheFactory'];
    function myCache($cacheFactory) {
        return $cacheFactory('myData');
    };

    storage.$inject = ['$localStorage'];

    function storage($localStorage) {
        return {
            message: message,
            getBooks: getBooks,
            setBooks: setBooks
        };

        function getBooks(url) {
            console.log("From cache");

            console.log("cache ", url);
            var result = $localStorage[url];

            console.log("cache  result ", result);
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