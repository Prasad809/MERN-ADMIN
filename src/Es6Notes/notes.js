
export const jsEs6 = [
    {
        "id": 1, "question": "What is ES6?",
        "Answer": `ES6 is ECMA2015. It is Big Update after Es5 standered in 2009. In the ES6 Add the new Features
    `},
    {
        "id": 2, "question": "How many ways to declare a variable?",
        "Answer": `variable is label to refer the scope of the indentifier.
        There are 3 types of variables
        Those are var, let, const
        Var is globle scope variable it is in Es5
        Let is block scope variable it is in Es6
        Const is also block scope variable, But It scopes only once it is in Es6
        `
    },
    {
        "id": 3, "question": "What is spread Operator?",
        "Answer": `This feature interduced in Es6.It is used to spread out the elements in the Objects. It is define as (. . .)Three Dots
        Example: let array=[1,2,3,4]
                Console.log(…array)//1 2 3 4                
       `
    },
    {
        "id": 4, "question": "What is Destructuring ?",
        "Answer": `This feature interduced in Es6.It is used to Destructuring elements of iterable objects into the indiual elements.
        Example:   let array=[1,2,3,4,6]
        let [a,b,c]=array;
        let obj={x:10,y:20}
        let {x:d,y:e}=obj;
        console.log(d,e);
        console.log(a,b,c);             
    `
    },
    {
        "id": 5, "question": "what is restParameter?",
        "Answer": `In Es6 arguments are not supported. To replace the Argument Es6 interduce the restParameter. Prefix of three dots in front of arguments are called restParameter
        function getAr(){
       console.log(arguments);
                }
       getAr(1,2,3)//[1,2,3]
       const getData=(...arguments)=>{
        console.log(arguments);
         }
        getData(1,2,35);//[1,2,35]
    `
    },
    {
        "id": 6, "question": "what is the meaning of Template literal Syntex?",
        "Answer": `when we want to wrap up the express with text content we use the Template literal syntex.
        The text content in Back sticks expression is in container.
        Syntex : 	let a=100;
        Let b="the value of a is ${"a"}"
        Console.log(b);                          
        `
    },
    {
        "id": 7, "question": "what is Object literal Syntex?",
        "Answer": `we can create the object with help literals.
        Example:let obj={
                    Name:”Guru”,
                    Age:24,
                    }                             
        `
    },
    {
        "id": 8, "question": "what is the Computed property?",
        "Answer": `when objects having same key-property to replace with new text context property we use the computed property. To deal with computed property we have to use the key in the Square brackets.
        Example: let name="Student Name"
        let obj1={
            [name]:"prasad"
        }
        let obj2={
            [name]:"kalyan"
        }
        let obj3={
            [name]:"guru"
        }                                             
        `
    },
    {
        "id": 9, "question": "What is an Arrow function?",
        "Answer": `Arrow function is shorted hand Syntex of the function.
        Syntex : const great=() => { console.log(“Hello world”); }; great()                                                  
        `
    },
    {
        "id": 10, "question": "what are the classes in javaScrpit?",
        "Answer": `Classes are the blue print for creating an Object
        It is an Object enclupse with data.
        It has a default constructor() method. This method is used to create the properties of the object. Js engine Calls the this method automatically
        Then we can create number of instances for that class
    Example: 
		class Person{
   		constructor(name,age){
        this.name=name;
        this.age=age;
        }
    }
        let p1=new Person("guru",24)
        console.log(p1);
    `
    },
    {
        "id": 11, "question": "what is the class Expression ?",
        "Answer": `when we are assign a variable to the class object is northing but a class Expreesion.
        Example: let Person=class{
                    constructor(name,age){
                this.name=name;
                this.age=age;
            }
        }
        Let p1=new Person(“Guru”,25);
        Console.log(p1);
        `
    },
    {
        "id": 12, "question": "what is the Static method in javaScript ?",
        "Answer": `Which method is Bounded to the Class Class that method is called static method. It means if we want to invocking the method we need use the Class Object, Don’t use the instances of a class.
        Example:
         let Person=class{
            constructor(name,age){
                this.name=name;
                this.age=age;
            }
            static changeName(gender){
                let Name=(gender === "male") ? "prasad" : "sushira"
                let Age=(gender === "male") ? 25 : 22
                return new Person(Name,Age)
            }
        }
        //from Instances
        let p1=new Person("sandeep",24)
        console.log(p1);
        //from static Method
        let p2=Person.changeName("male")
        console.log(p2)                                                          
    `
    },
    {
        "id": 13, "question": "what is the inheritance in javaScrpit?",
        "Answer": `One class Properties uses the Another class properties. Means The relationship between one class to another class.
        Which class want to be Extends that class is called as Base class.
        Which class derived from Base class is called as Derived class. 
        The class wants to be gets the another class Properties is called as Derived Class.
        Between the Derived class and Base class must be a keyword is called extends and the To get Properties from parent to child must need the super() key
        Example:
        class Parent{
            constructor(name){
                this.name=name
            }
        }
        class Child extends Parent{
            constructor(name,age){
                super(name);
                this.age=age;
            }
        }
        let c= new Child("Guru",23)
        console.log(c);        
        `
    },
    {
        "id": 14, "question": "what is the promise in javaScrpit ?***",
        "Answer": `Promise is an Object enclospe the result of an asynchronous operation.
        It has 3 states
        1)Pending
        2)fullfill with value
        3)rejected with error
        we want to do promise we need a Promise Constructor. It has 2 callback functions those are resolve and reject
        Syntex:
        let success=true;
        let promise=new Promise((resolve,reject)=>{
            if(success){
                resolve("Getting value")
            }else{
                reject("I Am An Error")
            }
        })
        console.log(promise);  
        If the Promise is fulfilled then resolve callback function is success
        If the Promise is reject then the reject callback function is Active                                                          
    `
    },
    {
        "id": 15, "question": "what are the then,catch and finally method in promise ?",
        "Answer": `then(), catch(), finally() those methods are used to get the data from the Promise.
         if the promise is fulfilled returns that values by using the then()
         If the Promise is reject return the error message by using catch()
        If the promise is resolved or rejected finally is used for final statements.
        Example: 	
            Above program
                promise.then(res=>console.log(res))
        .catch(err=>console.log(err))
        .finally(()=>console.log("i am completed")                                                         
    `
    },
    {
        "id": 16, "question": "what is promise chaining in Promise ?",
        "Answer": `The execution of asynchronous operations in a sequence is called promise chaining. Promise chaining we use the then() method for the relation between one promise to another promise
        Example:
        let promise=new Promise(res=>{
            res(10)
            return  res+10
        }).then((res)=>{
            console.log(res);
            return res * 2
        }).then((res)=>{
            console.log(res);
            return res * 3
        }).then(res=>{
            console.log(res);
        })
    `
    },
    {
        "id": 17, "question": "what is try and catch methods in promise? Or How to handle the error in promise ?",
        "Answer": `try and catch are used to handle the exception in Promise.
        try () block contains the sequence of the asynchronous Operations.
        If any Error Occurs in the try block there is catch block to having the Error Object
        Syntex: 
            try {
                // asynchronous Operations.
        } catch (error) {
            //console.log(error)
        }. finally{
/       /final statements
        }`
    },
    {
        "id": 18, "question": "what is async and await in promise ?",
        "Answer": `async and await are the join keywords. If we want to fetching the data or resolving the promise we asyn function.
        this function must have the async keyword and inside of the function must have another keyword is called await 
        then the function will fetch the data and performance the promise.
        This is one of the way to fetch the data
        Syntex: 
        async function getData(){
            let res=await fetch('jsonplaceholder.typicode.com/users')//this is url
            let data=await res.json()
            console.log(data);
        }
        getData()        
    `
    },
    {
        "id": 19, "question": "Explain promise. all, any, race methods ?",
        "Answer": `Promise. All() : this method is Return the another Promise. If the All promise are resolved then returns the response in an Array else rejected
        Syntex: 
         let p1=new Promise((resolve)=>{
            resolve(10)
        })
        
        let p2=new Promise((resolve)=>{
           resolve(20)
            //reject("error")
        })
        let d=Promise.all([p1,p2])
        console.log(d);
        Promise.any():This method is returns the first resolved promise value.
                 Irrespect to the among the promises those are fulfilled or rejected
        Syntex: 
            let d=Promise.any([p1,p2])
        console.log(d);
        Promise. Race(): This method returns the first promise if it is resolve or reject as Per execution time
        Example: 
        let p1=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //resolve(50)
                        reject("error1")
                        },3000)
                    })
                    let p2=new Promise((resolve,reject)=>{
                        //resolve(20)
                        reject("error2")
                    })
                    let p3=new Promise((resolve,reject)=>{
                        resolve(30)
                        //reject("error3")
                    })
                    let d=Promise.race([p1,p2,p3])
                    console.log(d)
`
    },
    {
        "id": 20, "question": "what is fetch API or web API ?",
        "Answer": `fetch API is the modern interface to allow the http request to server from the web browsers.
        Syntex: 
        fetch('url')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))        
    `
    },
    {
        "id": 21, "question": "what are the modules in javaScrpit ?",
        "Answer": `Modules are used in the strict mode only. When we are declare variable or function those won’t be automatically added in global scope.
        we want to use modules we need to declare the attribute type with value of module In main JS file.
        There are two keywords one is export and second one is import.
        To export the variables and function we use the export keyword.
        To import the those variable or functions we use It.
        Example :
        Main.html
                <script src="main.js" defer type="module"></script>
        Index1.js
            Export let name=”Guru”;
            Export let number=8888;
        main.js
            Import {name, number} from ‘./index1.js’;
            Console.log(name);//”Guru”
            Console.log(number);//8888        
        `
    },
    {
        "id": 22, "question": "what is the JSON data formate ?",
        "Answer": `JSON means JavaScrpit Object Notation.
        JSON is generally represent the both key-properties and values is in string formate.
        It is easy way to exchange the Json data.
        It has two method 
        1)JSON. Stringfy() – Convert the Object into Json formate
        2)JSON. Parse() – Convert the Jsno formate into Object
    `
    },
    {
        "id": 23, "question": "What are the collections in javaScrpit ? and Explain Map collection ?",
        "Answer": `There are 3 types of collections 
        1)Map: It holds the unique key value pairs. To use the Map collection we use the Map constructor.
        It has some methods
        a)set() b)get(key) c)values() d)clear() e)entries() f)has(key) g)size is a property
        Example: 
        let map=new Map()
        let a="prasad",b="kalyan",c="sandeep"
        map.set(a,25).set(b,27).set(c,23)
        // console.log(map.get(a));
        // console.log(map.entries());
        // console.log(map.values());
        for(let x of map){
            console.log(x);
        }                
    `
    },
    {
        "id": 24, "question": "Explain week Map collection ?",
        "Answer": `Weak Map: It holds the unique key value pairs. To use the Map collection we use the Map constructor.
        But it is only for the javaScript Object.
        It has some methods
        a)set() b)get(key) c)values() d)clear() e)entries() f)has(key) g)size is a property            
        `
    },
    {
        "id": 25, "question": "What is Set Collection ? ",
        "Answer": `Set: It is another collection object. 
        It not allows the duplicate elements/values. To use the Set collection we use the Set constructor
        It has some methos those are
        a)add() b)has() c)clear() d)delete() e)size is a property
        Example: 
        let set=new Set();
        set.add(1)
        set.add(2)
        set.add(3)
        set.add(2)
        set.add(4)
        console.log(set);                               
    `
    },
    {
        "id": 26, "question": "Example for Symbol primitive data type ?",
        "Answer": `Symbol is new primitive data type. It doesn’t have the any literal Syntex
        Example: 
		let array=[1,2,3,4,6]
        let some=array[Symbol.iterator]()
        console.log(some.next());
        console.log(some.next());
        console.log(some.next());
        console.log(some.next());
        console.log(some.next());
        console.log(some.next());      
    `
    },
    {
        "id": 27, "question": "what is the generator functions in javaScrpit ?",
        "Answer": `Generator function is new kind of function. It is different from general function.
        In the generator function we can pause the function in the midway of execution with help of yield keyword
        
        Example: 
        function * generat(){
            console.log("first");
            yield;
            console.log("second");
            yield;
            console.log("third");
            yield;
        }
        let p=generat()
        p.next()
        p.next()
        p.next()                    
        `
    },
    {
        "id": 28, "question": "what is web cookies?",
        "Answer": `Http cookies is a piece of data that server send to web browser. The web browser stores the cookies in the user computer and return the data from later server request. Http cookies are also called as web-cookies and browser-cookies
        To set the cookies we use the document.cookies = “name=value”
        To get the cookies    console.log(document.cookies)
        To delete/remove the cookies we use the document.cookies=” “;
    `
    },
    {
        "id": 29, "question": "what is localStorage  ?",
        "Answer": `LocalStorage is used to store the presistance data.LocalStorage is  store type of name-value pair.
        LocalStorage stores the data until we will clear it.
        It can Store the Json formate data. To pass the Object into the localStorage Object convert into the Json data.
        To retrieve the Json data then we need to convert into js object                        
    `
    },
    {
        "id": 30, "question": "what is seesionStorage ?",
        "Answer": `SessionStorage store the data for a seesion Time. Then After session Time out the will be cleared by it self.
        sessionStorage is store type of name-value pair same as LocalStorage                       
        `
    },
    {
        "id": 31, "question": "Coding Examples for Cookies? ?",
        "Answer": `Example:
        Index.html
            <div>
                <input type="text"id="name"><br><br>
                <input type="text" id="value"><br><br>
                <button id="btn1">Add</button>
                <button id="btn2">remove</button>
            </div>
        Index.js
        let name=document.getElementById("name")
        let val=document.getElementById("value")
        let add=document.getElementById("btn1")
        let remove=document.getElementById("btn2")
        function addCookie(){
            document.cookie="${"name.value"}=${"val.value"}"
        }
        add.onclick=addCookie;
        function removeCookies(){
           console.log( document.cookie="","removed");
        }
        remove.onclick=removeCookies                 
    `
    },
    {
        "id": 32, "question": "Example for localStorage ?",
        "Answer": `Index.js
        let name=document.getElementById("name")
        let val=document.getElementById("value")
        let add=document.getElementById("btn1")
        let remove=document.getElementById("btn2")
        function setStore(){
            localStorage.setItem(name.value,val.value)
            console.log(localStorage.getItem(name));
        }
        add.onclick=setStore;
        function removeStore(){
            localStorage.clear()
        }
        remove.onclick=removeStore;                     
    `
    },
    {
        "id": 33, "question": "Example for sessionStorage ?",
        "Answer": `Index.js
        let name=document.getElementById("name")
        let val=document.getElementById("value")
        let add=document.getElementById("btn1")
        let remove=document.getElementById("btn2")
        function setStore(){
            sessionStorage.setItem(name.value,val.value)
            console.log(sessionStorage.getItem(name));
        }
        add.onclick=setStore;
        function removeStore(){
            sessionStorage.clear()
        }
        remove.onclick=removeStore;                               
    `
    },
    {
        "id": 34, "question": "How to remove the Duplicate elements in an Array ?",
        "Answer": `let list=[1,2,3,56,89,2,3,5,9,3,1,2]
        let d=new Set(list)
        console.log([...d]);                
    `
    },
    {
        "id": 35, "question": "Find the factorial of the number ?",
        "Answer": `function factorial(n){
            if(n<= 0){
                return 1
            }else{
                return n*factorial(n-1)
            }
           }
           console.log(factorial(5));                               
    `
    },
    {
        "id": 36, "question": "Find the palindrome of the word ?",
        "Answer": `function palindrome(str){
            if(str == str.split('').reverse().join('')){
                return true
            }else{
                return false
            }
       }
       console.log(palindrome("level"));                           
    `
    },
    {
        "id": 37, "question": "How to remove the Duplicate objects in Array ?",
        "Answer": `let array=[
            {
                name:"prasad",
                age:25
            },
            {
                name:"kalyan",
                age:28,
            },
            {
                name:"kalyan",
                age:28
            }
           ]
           function duplicateObj(list){
            let a=list.map(ele=>JSON.stringify(ele))
           let b=[...new Set(a)]
           let c=b.map(ele=>JSON.parse(ele))
           return c
           }
           console.log(duplicateObj(array));                               
    `
    },
    {
        "id": 38, "question": "How to reverse the Array both Ascending and descending ?",
        "Answer": `let array=[1,2,356,9,4,4,8,6]
        console.log(array.sort());
        console.log(array.sort((x,y)=>y-x));                          
    `
    },
    {
        "id": 39, "question": "Reverse the String type Array Collections ?",
        "Answer": `let animals=["cat","dog","monkey","donkey"]
        console.log(animals.sort());
        console.log(animals.sort((x,y)=>y.localeCompare(x)));                      
    `
    },
    {
        "id": 40, "question": "Add the digits in a number ?",
        "Answer": `SessionStorage store the data for a seesion Time. Then After session Time out the will be cleared by it self.
        sessionStorage is store type of name-value pair same as LocalStorage                       
        `
    },
    {
        "id": 41, "question": "Add the digits in a number ?",
        "Answer": `let a=1245678956;
        function sumOfDigits(num){
            let total=0;
            let d=Array.from(String(num),x=>Number(x))
            for(let i of d){
                total+=i;
            }
            return total
        }
        console.log(sumOfDigits(a));                       
    `
    },
    {
        "id": 42, "question": "How merge two Objects ?",
        "Answer": `let obj1={
            name:"prasad",
            age:25
        }
        let obj2={
            place:"hyd",
            state:"ts"
        }
       // let obj3={...obj1,...obj2}
       let obj3=Object.assign(obj1,obj2)
        console.log(obj3);                      
    `
    },
    {
        "id": 43, "question": "How to merge two Arrays ?",
        "Answer": `let array1=[1,2,6,5]
        let array2=[2,1,8,9]
        //let array3=array1.concat(array2)
        //let array3=[...array1,...array2]
        console.log(array3);                        
    `
    },
    {
        "id": 44, "question": "Reverse the String ?",
        "Answer": `function reverseString(str){
            let d=str.split('').reverse().join('')
            return d
       }
      console.log( reverseString("prasad"));                       
    `
    },
    {
        "id": 45, "question": "Remove duplicate letters and Add ?",
        "Answer": `function duplicateLetters(str){
            let result=[]
                for(let i of str){
                    result.push(i)
                }
               let d=[...new Set(result)]
               return d.join('')
           }
          console.log( duplicateLetters("happybirthday"));                           
    `
    },
    {
        "id": 46, "question": "Given Number is prime or Not ?",
        "Answer": `function isPrime(n){
            if(n<=1){
                return false
            }
            for(let i=2;i<=n;i++){
                if(n%i == 0){
                    return false
                }
            }
            return true
           }
           console.log(isPrime(29));                           
    `
    },
    {
        "id": 47, "question": "Interview Question ?",
        "Answer": `let names=["prasad","koti","sandeep","kalyan"]
        let h1=document.getElementById("demo")
        let click=0;
        h1.addEventListener("click",function(){
            names.push(h1.innerText)
            h1.innerText=names[click]
            click=[click + 1]%names.length
        })                           
    `
    },
    {
        "id": 48, "question": "With Colors  ?",
        "Answer": `let h1=document.getElementById("demo")
        let colors=["red","blue","pink","green"]
        let click=0;
       // h1.setAttribute("style","color:red")
       h1.addEventListener("click",function(){
        h1.style.color=colors[click]
        click=[click+1]%colors.length
       })                           
    `
    },
]