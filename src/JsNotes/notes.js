
export const jsEs5 = [
    {
        "id": 1, "question": "What is JavaScrpit ?",
        "Answer": `Js : Java Scripted is a scripted language.
        It is interacted with the initially designed webpages.
        It has 3 core parts 
        1)Es5 and Es6 ECMA
        2)DOM Document object model
        3)BOM Browser Object model
        `},
    {
        "id": 2, "question": "What is History of Js ?",
        "Answer": `In 1995 one of the net scape developer name is Brenden Eiach with help of 
        Europian computer Manufacturing Association Interduce the JavaScript.
        It is firstly called as mocha
        Later it is LiveScrpit
        Now it is a JavaScrpit
          `
    },
    {
        "id": 3, "question": "Can you Explain the JavaScrpit Syntax?",
        "Answer": `JavaScript has 7 syntax parts
        1)white space :To maintain code cleanly. Js Engine Ignores the white space
        2)Statement : To give instruaction to Js engine to do Task.
        3)identifier : We choose a name to variable.
        4)comments : To give note and hints to understand the developer. Js Engine Ignores the Comments.
        5)blocks : The Squence of zero or more statements in {}
        6) Expression : It is a piece code to eval values
        7)Key words        
       `
    },
    {
        "id": 4, "question": "What are the Data types in javaScrpit ?",
        "Answer": `In javaScrpit there 2 types of data types
        1)Primitive
        2)Non-primitive(Complex data types)
        Primitive data types are 7 
        1)Number
        2)String
        3)Undefine
        4)Null
        5)Boolean
        6)Symble
        7)Bigint
    Non-Primitive type are 2
        1)Object 
        2)Array      
        `
    },
    {
        "id": 5, "question": "What are the Complex data types?",
        "Answer": `Complex are 2 types
        1)Array: It is an order List. Every elements are specified with index number.
        Index number start with 0.Ex : var array=[1,2,3,6,7,8]
        2)Object: It is an unorder List. It holds the data in the form of key value pair. Ex: var Object={name:’prasad’,age:24}                     
            `
    },
    {
        "id": 6, "question": "what are the loops in JavaScript?",
        "Answer": `JavaScrpit has 5 types of loops 
        1)while 
            Syntax: var i=0;
                While(i<10){
                Console.log(i);
                I++;
            }
        2)dowhile
            Syntax: var i=0;
                While{
                Console.log(i);
                I++;
            }do(i<10)
        3)basic for
            For(let i=0;i<10;i++){
                Console.log(i)
            }
        Those Two are Interduced in ES6 in 2015
        4)for of 
            For(let I of [1,2,3,4,5]){
                Console.log(i)
            }
        It return the values of array
        5)for in
            For(let I in [1,2,3,4,5]){
                Console.log(i)
            }
        It return the index/keys of the object                                  
            `
    },
    {
        "id": 7, "question": "How does hoisting work in javaScript?",
        "Answer": `when you are declaring variable and function will execute the top of the script.It is applicable for ES5.
        Example:console.log(a);//undefine
                Foo();//hii
            Var a=20;
            Function foo(){
                Console.log(“hii”);
                }                       
            `
    },
    {
        "id": 8, "question": "what are the clousers in javaScript?",
        "Answer": `The combination of the function together with reference to surrounding state is called as clousers.
        Simply Accessing the Outer function’s scope with inner function
        Example:
            Function outer(){
                Var a=10;
                Function inner(){
                    Console.log(a)
                    }
                    Inner()
                }
                outer()//10                                      
            `
    },
    {
        "id": 9, "question": "what is difference between == and === in javaScrpit?",
        "Answer": `== operator compares the two variable after type conversation
        === operator compares the two variables without type conversation.
        Ex: console.log(‘5’ == 5);//true     console.log(‘5’ === 5);//false                                          
            `
    },
    {
        "id": 10, "question": "what is the operator to find the type of the variable?",
        "Answer": `To find the type of the variable javaScrpit having one operator that is typeof
        Examples:
           console.log(typeof "name");//string
           console.log(typeof 12);//number
           console.log(typeof true);//boolean
           console.log(typeof null);//object
           console.log(typeof undefined);//undefine
           console.log(typeof 1532n);//bigent
           console.log(typeof NaN);//number
           console.log(typeof this); //object                                          
            `
    },
    {
        "id": 11, "question": "what are the operators in javaScrpit?",
        "Answer": `1)Unnary Operators: This operator works on one variable.
    Like Increament or Decreament  (i++,i-- )
    2)Arthematic operators :the Arthematic signs in between two variables are called as Arthematic operators.Like +,-,x,/
    3)Logical Operators : AND,OR and NOT are the Logical Operators                                          
            `
    },
    {
        "id": 12, "question": "what are the conditional Statements?",
        "Answer": `if, if-else, ternary conditional and switch are the conditional Statements.
        The execution of a code based on the condition.
        The short hand form of if-else is ternary conditional
        Switch statements is based on the statement and case value                                                  
        `
    },
    {
        "id": 13, "question": "How to check the given object is Array Or Not?",
        "Answer": `let obj="dhgchj"
        console.log(Array.isArray(obj));//false
        `
    },
    {
        "id": 14, "question": "what is the use of the ‘this’ keyword?",
        "Answer": `this keyword is inside the method.it refers an object that invocaking method
        Ex:function person(name,age){
            This.name=name;
            This.age=age;
        }
        Let p=new person(“guru”,24);
        Console.log(p);//{name:”guru”,age:24}                                                          
        `
    },
    {
        "id": 15, "question": "what is function in javaScrpit?",
        "Answer": `To avoid the same code in script we use function. function is a reuseable code.
        ->function is keyword followed by function name and paranthirst brackets having parameters/arguments followed by function body
        ->To call a function with the functionName is called as invocation of a function.                                                 
        `
    },
    {
        "id": 16, "question": "what is an argument ?",
        "Answer": `when we want to access the object as an Array. We use the Arguments
        Example: 
        function add(){
            let total=0;
            for(let i=0;i<arguments.length;i++){
                total+=arguments[i];
            }
            return total
        }
        console.log(add(1,2,3,5,6,8,5,5));
        `
    },
    {
        "id": 17, "question": "Use of return keyword in javaScrpit?",
        "Answer": `Return is a keyword in javaScrpit. 
        It is used inside the function To return the final value and return the only one value.
        In very function having only one return statement.`
    },
    {
        "id": 18, "question": "what is the meaning of object invocation?",
        "Answer": `when we are using the function inside the object with this keyword is called as method.
        This type of the Method are called Object invocation methods.
        Example: 
            let obj={
            name:"prasad",
            age:25,
            data:function(){
                return this.name+" "+this.age
            } 
        }
        console.log(obj.data());
        `
    },
    {
        "id": 19, "question": "what is the IIFE?",
        "Answer": `IIEF --- Immediate Invocation Function Execution. It is self invocation function.
        Example:	(function(){
                    console.log("hii");
                 }())
        
        ->Which function don’t have any function name is called Annonymous function.
        Example :
            let a=function(){
            console.log("Hii");
        }
        a()
        `
    },
    {
        "id": 20, "question": "what is function expression?",
        "Answer": `When we are Assign an variable to function is called as function expression .
        All anonymous are under the function expression.
        `
    },
    {
        "id": 21, "question": "what is the callback function?",
        "Answer": `Which function start the execution after complesation of another function is called  as callback function.
         And the function as  the Arguments of the another function
        `
    },
    {
        "id": 22, "question": "what is difference between ForEach,Map and reducer methods in javaScrpit?",
        "Answer": `ForEach() : ForEach method is an array method having one callnback function.Based on the callback function Array collection will return the elements after modification.
        Example:	
        list1.forEach(ele=>{
           console.log(ele*3);
        })
         Map method is an array method having one callnback function.Based on the callback function Array collection will return the new Array after modification.
        Example:	let d=list1.map(ele=>{
                          return ele*3
        })
        console.log(d);
        
        reducer :It is also Array Method having one call back function with dependency.It is also used to retrieve the elements.
        Example: let d=[1,2,3,46,2].reduce((a,b)=>a+b,11)
            console.log(d);//54+11 = 65
        
        `
    },
    {
        "id": 23, "question": "what is difference between null,undefine?",
        "Answer": `undefine: when we are declare a variable,but not assign any value to that variable it consider as undefine.
        Null : Null is special type of primitive data type.When we want to absent the data with special manner we use null.
        typeof  null is an object.It means it refers the Object and Array also.        
        `
    },
    {
        "id": 24, "question": "what is the function constructor?",
        "Answer": `function constructor is used to create the object with the help of this keyword. We can create more number of instances
        Example:
            function objectCreate(name,age){
            this.name=name;
            this.age=age;
           }
           let p1=new objectCreate("Guru",24);
           let p2=new objectCreate("sandeep",23)
            console.log(p1,p2);        
        `
    },
    {
        "id": 25, "question": "How to freez the object?",
        "Answer": `freez() method is not allow the any modification for entire Object
        		let obj={
                    name:"prasad",
                    age:25
                }
              Object.freeze(obj)
              obj.age=23;
              console.log(obj);{name:”prasad”,age:25}                        
        `
    },
    {
        "id": 26, "question": "How to freez the properties of the Object?",
        "Answer": `Object.defineProperty and properties having 4 attributes those are configurable,writable,enumrable and value
        Based on writable
        	let obj={
                name:"prasad",
                age:25
          }
          Object.defineProperty(obj,"age",{
               configurable:false,
               writable:false, 
               if it is true then modification happened else property is freezed
          })
          obj.age=30;
          console.log(obj);//{name:”prasad”,age:25}                
        `
    },
    {
        "id": 27, "question": "How many ways to create an object?",
        "Answer": `Object literal Syntex model
		function createObject(name,age){
   				return { 
                    name,
                    age
                }
              }
                console.log(createObject("Guru",25));
        constructor function
                function objectCreate(name,age){
                this.name=name;
                this.age=age;
               }
               let p1=new objectCreate("Guru",24);
                       console.log(p1)
        Es6 classes
                     class Person{
                constructor(name,age){
                    this.name=name;
                    this.age=age
                }
                  }
              let p1=new Person("Guru",24)
              console.log(p1);            
        `
    },
    {
        "id": 28, "question": "What is the function context in JavaScrpit?",
        "Answer": `function context are 4types
        1)function invocation Calling a function is called function invocation
        2)Method invocation Using functions inside an Object is called method invocation
        3)function constructor Creating the object with instances is called  as function constuctor
        4)Indirect invocation Every Object having properties and methods.
        As an Object function having some properties and methods is called  as indirect invocation.                
        `
    },
    {
        "id": 29, "question": "what is the call,apply and bind method in javaScrpit?",
        "Answer": `call() is method is used to invocking the function with this.value and list of an arguments which are separated by the cama.
         Apply() is method is used to invocking the function with this.value and list of an arguments which are in the square brackets
        bind() is used to bind one data of an object with another data of an object
        Example:
        let bike={
            type:"bike",wheels:2
           }
        let car={
            type:"car",wheels:4
           }
        let say=function(greet){
            console.log(greet);
        console.log("the type of vehicle is "+this.type + " and having the    wheels are "+this.wheels);
        }
           say.call(car,"About vehicle")
           say.apply(bike,["About Another Vehicle"])                
        `
    },
    {
        "id": 30, "question": "What is the DOM?",
        "Answer": `DOM – Document Object Model is Application programming Interface to manipulating the HTML Documents.
        HTML Documents containing the a tree of nodes
        root Node is document followed by child Node               
        `
    },
    {
        "id": 31, "question": "How many ways to get elements to Dom?",
        "Answer": `There are some methods to get the elements from html document
        1)document.getElementByTagName()
        This method returns the array collection of a Tags which has same tag name
        2)document.getElementByClassName()
        This method returns the array collection of tags which has same class name
        3)document.getElementByName()
        This method returns the array collection of tags which has same name of name
        4)document.getElementById()
        This method returns the only one tag based on the Id selector
        5) document.querySelector("#demo")
        This method returns the one tag based on the css selectors
        6) document.querySelectorAll("#demo")
        This method returns the collection of an Array having same css selectors name                
        `
    },
    {
        "id":32, "question": "How to create elements in Dom?",
        "Answer": `In Dom we can create the tags dynamically. There are some method to create tags those are
        1)document.createElement(“tag name”) To create the tag
        Let h1= document.createElement(“h1”)
        2) document.createElement(“tag name”).innerText
        h1.innerText=”Hello World”To write the content 
        3)document.body.appendChild(document.createElement.innerText); 
        Document.body.appendChild(h1)To display the content in webpages
        `
    },
    {
        "id": 33, "question": "How to apply styles to Dom elements?",
        "Answer": `There are some standed method to apply the styles
        1)node.style.property=”property value”;
        2)setAttribute()                
        `
    },
    {
        "id": 34, "question": "what is the difference between innerHtml and innerText?",
        "Answer": `When we want to display content on the webpages we use the InnerText
        When we want to display content on the webpages with help of tags we use the innerHtml.
               let ul=document.createElement("ul")
                let prasad="I am bad Boy"
                ul.innerHTML="<li>${"prasad"}</li>"
                // ul.innerText="prasad"
                document.body.appendChild(ul)                
        `
    },
    {
        "id": 35, "question": "How to deal with forms?",
        "Answer": `Index.html ===>
        <form id="users">
            <input type="text" name="name"><br><br>
            <input type="number" name="age"><br><br>
            <input type="submit" value="submit">
          </form>
            Index.js ===>
        let users=document.getElementById("users")
                users.addEventListener("submit",function(e){
                        e.preventDefault()
                        let obj={}
                        obj.name=document.forms[0]["name"].value
                    obj.age=document.forms[0]["age"].value
                    console.log(obj);
            })            
        `
    },
    {
        "id": 36, "question": "What is an event?",
        "Answer": `An Action occurs on the webpages is called an Event. 
        User interaction on webpages and given the feedback to It.                
        `
    },
    {
        "id": 37, "question": "What is event propagation?",
        "Answer": `An Action propagate through the nodes is called as Event Propagation. Event Propagation is also called as Event Flow.
        DOM level 0 propagation has 2 phases
        1)Event Bubbling – flow starts from most specified element to least specified element
        2)Event Capturing – flow starts from least specified element to most specified element
         DOM level 2 propagation has 3 phases
        1)	Event Capturing – create an interaction
        2)	Event target   -- the Actual value
        3)	Event Bubbling – gives the response               
        `
    },
    {
        "id": 38, "question": "What is event handlers and how many types?",
        "Answer": `An Action occurs on the webpages is called an Event. To deal with an event we need a handlers. 
        Event handle is a piece of code. EventHandles also called as Event Listeners.
        There are 3 types
        1)HTML Attribute Event handler --- Event handler is mixed with HTML document
        2)Level 0 Event handler --- get the element to script add event to that tag
        3)Level 2 Event handler --- This event handler having two types those are 
        a)addEventListener – we can create the event 
        b)removeEventListener – we can remove the event                       
        `
    },
    {
        "id": 39, "question": "what is the Event object?",
        "Answer": `An Action occurs on the webpages is called an Event. Event is an Object having some properties and methods.
        1)preventDefault();It is method used to stop the refresh at form submittion type.
        2)target is property for actual value                               
        `
    },
    {
        "id": 40, "question": "what is BOM?",
        "Answer": `BOM – Browser Object Model
        It is a globle object. Core object of the javascrpit in browser.
        Bom provides with object expose the window browser functionality                                       
        `
    },
    {
        "id": 41, "question": "What are the command prompts in javaScrpit?",
        "Answer": `There are the 3 types of command Prompts
        1)alert – It is a dialogue prompt with information for user ackowledgement. And having one button
        2)confirm – It is another dialogue prompt with information having two buttons those are ok and cancel
        3)prompt -- It is another dialogue prompt having one input box and two buttons those are ok and cancel                                               
        `
    },
    {
        "id": 42, "question": "what is setTimeOut and setInterval in javaSCrpit?",
        "Answer": `setTimeOut is an higherOrder function having one callback function with time delay. After time delay the callback function will executed
        Example : let tdTime=setTimeOut(()=>{ },1000);
         setInterval is an higherOrder function having one callback function with time delay. Every time delay the callback function execute intervally
        Example : let tdInt=setTimeInterval(()=>{ },1000);                                                       
        `
    },
    {
        "id": 43, "question": "what is clearTimeOut and clearTimeInterval?",
        "Answer": `To clear the setTimeOut we use the clearTimeout method().
        Example: clearTimeout(tdTime)
        To clear the setInterval we use the clearInterval method().
        Example: clearInterval(tdInt);                                                               
        `
    },
]