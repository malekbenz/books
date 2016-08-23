// dataservice factory
(function () {
    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'storage', '$cacheFactory'];

    function dataservice($http, storage, $cacheFactory) {
        var url = "http://it-ebooks-api.info/v1/";

        var httpCache = $cacheFactory.get('$http');

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
            console.log("myUrl", myUrl);

            var cachedData = httpCache.get('http://it-ebooks-api.info/v1/search/javascript/page/1');
            console.log("httpCache : ", cachedData);

            return $http.get(myUrl, { cache: true })
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