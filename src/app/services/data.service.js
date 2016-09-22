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
            console.log("getBooks By ID function ");    
            return $http.get(myUrl)
                .then(getBooksComplete)
                .catch(getBooksFailed);
        };

        function getBooks(query, page) {
            var myUrl = url + "search/" + query + "/page/" + (page || 1);
            console.log("getBooks function ");                    

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
            console.log("getBooksComplete function ");                    
            var log = [];
            angular.forEach(response.data.Books, function(book, key) {
                    // this.push(key + ': ' + book);
                    book.Image = book.Image.replace("http","https");
                    }, log);
            console.log("response.data.Books ", response.data.Books);                    
            return response.data;
        };

        function getBooksFailed(error) {
            logger.error('XHR Failed .' + error.data);
        };
    }
} ());