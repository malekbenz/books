// storage.js
(function () {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage);
    storage.$inject = ['$localStorage'];
    
    function storage($localStorage) {
        console.log($localStorage)

    };
})();