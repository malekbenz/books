angular.module("pizzaApp")
        .component("component.books",{
            bindings :
            {
                books :"=",
                pages :"=",
                term :"="
            },
            controller :function (){
                console.log("you'r inside a component");
                console.log("Books ", this.books)
                console.log("count ", this.count)
            },
            templateUrl:"views/component.books.html"
 

        })

        
        // .component("helloWorld",{
        //         template: 'Hello World!'
        //     });

