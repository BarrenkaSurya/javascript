//intializing array data structure in javascript 

// let arr=[1,2,3,4,5,"surya",'s',true]
// console.log(arr)

// //get
// console.log(arr[0], arr[3], arr[5])

// //edit
// arr[6]='r'
// console.log(arr)

// //length of the array
// console.log(arr.length, "length of the array")

// //Array properties
// arr.push(20)
// console.log(arr)
// //removes the last element
// arr.pop()
// console.log(arr)
// //removes the first element
// arr.shift()
// console.log(arr)

// let arr1 =[1,2,3]
// let arr2 =[4,5,6]


//call backs

// function geteven(printname){
//     let sum = 4
//     if(sum%2==0){
//         console.log("Even")
//     }
//     else{
//         console.log("NOT")
//     }
//     printname(sum);
// }

// function print(sum){
//     for(let i=0; i<5; i++){
//         console.log(i+" ");
//     }
// }
// geteven(print);

// setTimeout(() =>{
//     console.log("My name is surya")
// }, 3000); //3000 is  3 seconds


// clearTimeout();

//  setInterval(() =>{   //it rens the code for every 1 second
//     console.log("javascript is a good scripting language")
// },1000);

// clearInterval(); // to stop the code





// let name = function(surya){
//     surya();
// }


// name(() =>{
//     console.log("i am in surya func")
// })


// console.log(a);
// func()   


// var a = 10;
// // console.log(a);
// function func(){
//     console.log("I am in function")
// }

//  ............................................PROMISE..................................
//  .......EXAMPLE -- 1
// const prom = new Promise((resolve,reject) =>{
//     let val = Math.random()

//     if(val<0.5)
//      resolve('success :'+val)
//      else
//      reject('rejected :'+val)
// })

// prom
// .then((responce)=>{     //.then & .catch => these are chaining mechanism which allows u to keep track wheather your promise been resolved or rejected
//     console.log(responce)  //this functions are only used in promise.....
// })
// .catch((error) =>{
//     console.log(error)
// })

// .................................EXAMPLE--2....

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const success = true;
//         if(success){
//             resolve("Data fetched successfully");
//         } else {
//             reject("Error: unable to fetch data");
//         }
//     },2000)
// })

// promise.then((responce) => {
//     console.log(responce);
// })
// .catch((error) => {
//     console.log(error);
// })

// ...................................................................................................
//example for callbacks and HOF --> HIGHER ORDER FUNCTION......
// function sum(a1,b1){
//     return a1+b1;
// }

// function mul(a1,b1){
//     return a1*b1;
// }

// function calc(a1,b1,operation){
//     let res = operation(a1,b1);
//     console.log(res);
// }

// calc(2,3,sum);

// fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//     return res.json()
// })
// .then((finalres)=>{
//     console.log(finalres)
// })
// .catch((err)=>{
//     console.log(err)
// })

//axios
// try{
// axios("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// }
// catch(err){
//     console.log(err);   
// }

//async
// async function getAPIresponce(){
//     console.log('execution started');
//     let res = await axios('https://jsonplaceholder.typicode.com/posts');
//     console.log(res);
// }

// //worker thread
// getAPIresponce();

// //main thread
// console.log('line no 154');
// console.log('line no 155');
// console.log('line no 156');
// console.log('line no 157');
// console.log('line no 158');

// function a(){
//     // let age = 10;
//     b()
//     function b(){
//         // let age = 10;
//         c()
//         function c(){
//             let age = 10;
//             console.log(age);
//         }
//     }
    
// }

// a()

// IMP INTERVIEW QUESTION OF JAVA SCRIPT...
// for(let i=0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },5000)    
// }                       

// for(var i=0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);     //output :- 5 5 5 5 5 
//     },5000)    
// } 

// const arr = [1,2,3,4,5]
// const res = arr.reduce((accumulator,currval)=>{   //accumulator iterates (n-1) times
//     //console.log(accumulator, " : ",currval);
//     // 1 2 ||  3 3 || 6 4 || 10 5 => 15;
//     console.log(accumulator, " : ",currval);
//     return accumulator + currval;  
// })
// console.log(res)


// function indianlanguages(lang, replace){
//     lang.telugu = replace;
//     console.log(lang.telugu)
// }

// const languages = {
//     telugu:"hyderabad",
//     tamil: "tamilnadu",
//     states:20,
//     malayalam:"kerala"
// }

// console.log(languages);
// console.log(languages,'vizag');


//...................btn click event......................
// const btn = document.getElementById('btn');
// const el = btn.addEventListener("click",()=>{
//     prompt("Hi I am Button clicked!..")
// });

// console.log(el);

//...........................................................................................................

// class API{
//     #secure = false;
//     constructor(url,method="GET"){
//         this.url = url;
//         this.method = method;

//         if(this.url.startsWith("https")){
//             this.#secure = true;
//         }
//     }

//     isSecure(){
//         return this.#secure;
//     }

//     updateURL(newurl){
//         this.url = newurl;
//         if(this.url.startsWith("https")){
//             this.#secure = true; 
//         }
//         else{
//             this.#secure = false;
//         }
//     }
// }

//  currying Example...........

// function currying(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let res = currying(1)(2)(3);
// console.log(res);


// closures Example...............
// A function bind together with its lexical environment
// function x(){
//     var a = 9;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

let ans = () => {
    let str = "surya";
    console.log(str);
}

console.log(ans);




























































































































































