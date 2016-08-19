
angular.module("pizzaApp",["ngRoute"])

        .config(function($routeProvider) {
            $routeProvider
            .when("/:title", {
                templateUrl : "views/main.html",
                controller : "main as vm"

            })
            .when("/", {
                templateUrl : "views/main.html",
                controller : "main as vm"

            })
            .when("/book/:id", {
                templateUrl : "views/book.html",
                controller : "book as vm"

            })
            .otherwise({redirectTo:'/'});
            //  $locationProvider.html5Mode(true);
        })



        .controller("main",function($http, $routeParams){ // $routeParams
            var self = this ;
            this.books =[];

            var title = $routeParams.title || "latest";
            var url = "http://it-ebooks-api.info/v1/search/"+title;

            $http.get(url).then(
                function success(data){
                      self.books =  data.data.Books;

                },
                function error(err){
                       console.log(err); 


                }
            );

            this.articles   = ['1','2','3','4','5','6','7','8'];
            this.tables     = ['1','2','3','4','5','6','7','8','9','10'];

        })
        .controller("book",function($http, $routeParams){ // $routeParams
       
            
            var self = this ;
            
            var url = "http://it-ebooks-api.info/v1/book/" + $routeParams.id;

            $http.get(url).then(
                function success(data){
                        self.book =  data.data;
                        console.log(self.book);
                },
                function error(err){
                       console.log(err); 


                }
            );

        });

