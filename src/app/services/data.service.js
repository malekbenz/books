// dataservice factory
(function () {
    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'storage'];

    function dataservice($http, storage) {

        var url = "https://it-ebooks-api.info/v1/";

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

            var response = storage.getBooks(myUrl);
            if (response) {
                return Promise.resolve(response.data);
            }

            return $http.get(myUrl, { cache: false })
                .then(getBooksComplete)
                .catch(getBooksFailed);
        };

        function getBooksComplete(response) {
            storage.saveBooks(response.config.url, response);
            var log = [];
            angular.forEach(values, function(value, key) {
                    this.push(key + ': ' + value);
                    }, log);
            console.log("log", log);                    
            return response.data;
        };

        function getBooksFailed(error) {
            logger.error('XHR Failed .' + error.data);
        };
    }
} ());