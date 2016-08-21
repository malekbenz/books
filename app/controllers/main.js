angular.module("pizzaApp")
        .controller("main",function($http, $routeParams){ // $routeParams
            var self = this ;
            
            this.books =[];
            this.searchTerm = $routeParams.title || "javascript";
            var pageSearch = $routeParams.page;
            
            this.total = 0;
            this.pages = {
                total :0,
                current: ($routeParams.page || 1) ,
                activePages: []
            };

            var title = this.searchTerm;
            
            
            function setPages (){
                self.pages.activePages  = [];
                var  last = 10 + Math.floor(self.pages.current/10) *10;
                last = last < self.pages.total ? last : self.pages.total ; 

                var start =   Math.floor(self.pages.current/10) *10   ;
                 start =   start > 0 ? start  : 1   ;
                console.log("current page start ", start);
                console.log("current page end ", last );
                console.log("current page total ", self.pages.total  );

                for(var i = start ; i <= last  ; i++ ){
                   self.pages.activePages.push(i);
                }
               
            }

            var url = "http://it-ebooks-api.info/v1/search/" + title;

            
            if (pageSearch)
            {
                url = url + "/page/" +  pageSearch; 
            }

            this.search = function(){
                        var url = "http://it-ebooks-api.info/v1/search/" + this.searchTerm;
                        $http.get(url ).then(
                                        function success(data){
                                            self.books =  data.data.Books;
                                            self.pages.total = Math.floor(data.data.Total / 10) + 1 ;
                                            self.pages.current = data.data.Page ;
                                            self.pages.time = data.data.Time ;

                                            setPages();
                                            console.log("Pages ", self.pages);
                                            console.log("Books ", data);

                                        },
                                        function error(err){
                                            console.log(err); 
                                        }
                                    );
                        };

            $http.get(url).then(
                function success(data){
                      self.books =  data.data.Books;
                                self.pages.total = Math.floor(data.data.Total / 10) + 1 ;
                                setPages();

                },
                function error(err){
                       console.log(err); 
                }
            );

            this.tables     = ['1','2','3','4','5','6','7','8','9','10'];

        })

;