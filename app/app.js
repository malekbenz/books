
angular.module("pizzaApp",["ngRoute"])

        .config(function($routeProvider) {
            $routeProvider
            .when("/:title/:page", {
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
            this.searchTerm = $routeParams.title || "latest";
            var pageSearch = $routeParams.page;
            console.log("SerachPage", pageSearch );
            
            this.total = 0;
            this.pages = {
                total :0,
                current: ($routeParams.page || 0) ,
                activePages: []
            };

            var title = this.searchTerm;
            
            
            function setPages (){
                
                
                self.pages.activePages  = [];
                console.log("page object", self.pages);
                
                for(var i = 1 ; i < 10  ; i++ ){

                   self.pages.activePages.push(self.pages.current - (self.pages.current% 10) + i);
                }
               
            }

            var url = "http://it-ebooks-api.info/v1/search/" + title;

            console.log(" befor pageSearch :", url);
            if (pageSearch)
            {
                url = url + "/page/" +  pageSearch; 
            }
            console.log(" after pageSearch :", url);

            this.search = function(){
                        var url = "http://it-ebooks-api.info/v1/search/" + this.searchTerm;
                         console.log("url",url)   
                        $http.get(url ).then(
                                        function success(data){
                                            
                                            self.books =  data.data.Books;
                                            self.pages.total = data.data.Total / 10 + 1 ;
                                           
                                            setPages();
                                           
                                        },
                                        function error(err){
                                            console.log(err); 
                                        }
                                    );
                        };

            $http.get(url).then(
                function success(data){
                      self.books =  data.data.Books;
                                self.pages.total = data.data.Total / 10 + 1 ;
                                setPages();

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

