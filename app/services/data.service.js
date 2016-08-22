// dataservice factory
(function () {
    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        var url = "http://it-ebooks-api.info/v1/search/";
        //url = url + "/page/" + pageSearch;

        return {
            getBooks: getBooks,
            getBooksByPage: getBooksByPage

        };

        function getBooksByPage(title, page) {
            var myUrl = url + title + "/page/" + page;
            console.log("title", title);
            console.log("page", page);
            return $http.get(myUrl)
                .then(getBooksComplete)
                .catch(getBooksFailed);
        }

        function getBooks(title) {
            var myUrl = url + title;
            console.log("title", title);
            return $http.get(myUrl)
                .then(getBooksComplete)
                .catch(getBooksFailed);
        }

        function getBooksComplete(response) {
            return response.data;
        }
        function getBooksFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
    }
} ());