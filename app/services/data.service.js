// dataservice factory
(function () {
    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        var url = "http://it-ebooks-api.info/v1/";

        return {
            getBooks: getBooks,
            getBook: getBook
        };

        function getBook(Id) {
            var myUrl = url + "/book/" + Id;
            return $http.get(myUrl)
                .then(getBooksComplete)
                .catch(getBooksFailed);
        };

        function getBooks(query, page) {
            var myUrl = url + "search/" + query + "/page/" + (page || 1);
            
            return $http.get(myUrl)
                .then(getBooksComplete)
                .catch(getBooksFailed);
        };

        function getBooksComplete(response) {
            return response.data;
        };

        function getBooksFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        };
    }
} ());