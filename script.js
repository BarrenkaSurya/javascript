//var was used in old javaScript before (ES-6)
//var name= "surya";
//var age = 23;
//var city="shadnagar";
//var gender = 'm';

// let name= "surya";
// let age = 23;
// let city="shadnagar";
// let gender = 'm'; 

// console.log(name,age,city,gender)

// const name= "surya";
// const age = 23;
// const city="shadnagar";
// const gender = 'm'; 
// console.log(name,age,city,gender)

// ................Objects....................
//In java we can't create properties with space but in javascript we can
// let car={
//     wheel:"yes",
//     seats:6,
//     Ac:true,
//     numberplate:2345, 
//     "engineversion" : 8, //we can intialize it many ways
//     "year":2020,
// }
// console.log(car["year"],car["engineversion"])
// console.log(car.year,car["engineversion"])
// console.log(car)

//---get
// console.log(car.seats)
//console.log(car["seats"],car["Ac"])//type 2 to get keys

//--edit
// car.numberplate=456
// console.log(car.numberplate)

//--delete
// delete car.Ac
// console.log(car)

// let arr=[1,2,3,4,4]
// console.log(arr)



//creating functions
// number()  
// before function calling is nothing but Hoisting...
//  it gives sum no matter if it is anywhere it treat like top the file
// function number(){
//     let a= 23
//     let b =  100
//     console.log("addition-->",a+b, "subtraction-->",b-a)
// }

// sum()

//for of

// let arr= [1,2,3,4,5,6,7,8]

// //num can be written as anything like variable
// for(num of arr){
//     console.log(num)
// }



//typeof

// const a=2
// const b ="surya"
// const c= true
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)



//functionExpression

// let sumExpression = function(a,b){
//     return a+b;
// }
// let result = sumExpression(1,2)
// console.log(result)


//typeof
// let sumExpression = function(a,b){
//     if(typeof a=="number" && typeof b=="number"){
//         return a+b;
//     }
//     else{
//         console.log("not a number")
//     }
// }
// let result = sumExpression(1,2)
// console.log(result)


// let abc={
//     name:"surya"
// }
// console.log(typeof abc)


// //typeof
// const sum=function(){

// }
// console.log(typeof sum)
// console.log(typeof null)

// let a = 0;
// console.log(a)
// console.log(++a)
// console.log(a++)
// console.log(a--)
// console.log(--a)

// loops

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// alert() confirm() prompt()  popup boxes
// let ans = confirm("My name is surya")
// if(ans===true){
//     alert("Yes ur name is correct")
// }else{
//     alert("your name is incorrect")
// }

// let name = prompt("What is your name?")
// alert("Hello "+ name +" How are you?")


//it can access through after linking to the html file
//  document.write("Hello world")   


// for(let i=1; i<=100;i++){
//     if(i>=20 && i<=30){
//         continue;
//     }
//     else if(i>=60 && i<=70){
//         continue;
//     }
//     console.log(i+" ")

// }


// console.log(3>5>6)


// function sum(a=5, b=5){
//     console.log(a+b);
// }
// sum(10)  --> 15


// function sum(a=1, b=3){
//     return a+b
// }
// let ans = sum(10,20)
// console.log(ans);

//......................Events..........................

// const btn = document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     const inp = document.querySelector("input");
//     const para = document.querySelector("p");
//     para.innerHTML =  inp.value;
// });

//...................calculater..........................date => 22nd may

// const select = document.querySelector("select");

// //  select.addEventListener("click", ()=>{})  ...this is the one way to do
 
// select.onchange = function(){
//     // const input1 = document.querySelector("input:first-of-type");
//     // const input2 = document.querySelector("input:last-of-type");

//     const input1 = document.querySelector("#btn1");
//     const input2 = document.querySelector("#btn2");
//     const para = document.querySelector("p");

//     switch(select.value){
//         case "+" :
//             para.innerHTML = Number(input1.value) + Number(input2.value)
//             break;
//         case "-" :
//             para.innerHTML = Number(input1.value) - Number(input2.value)
//             break;
//         case "*" :
//             para.innerHTML = Number(input1.value) * Number(input2.value)
//             break;
//         case "/" :
//             para.innerHTML = Number(input1.value) / Number(input2.value)
//             break;
//         case "%" :
//             para.innerHTML = Number(input1.value) % Number(input2.value)
//             break;            
        
//     }
// };

// ...............................................................................................

// const textarea = document.querySelector("textarea");
// const limit = 100;

// textarea.onkeyup = function(){
//     const para = document.querySelector("p");
//     para.innerHTML =  limit - textarea.value.length;
// }
// ..........................................................................................

// const btn = document.querySelectorAll("button");

// for(let i=0; i<btn.length; i++){
//     btn[i].onclick = function(){
//         const para = document.querySelector("p");
//         para.innerHTML = btn[i].innerHTML;
//     }
// }

// ...........................using anchor tags...............................................

// const anchors = document.querySelectorAll("a");
// for(let i=0; i<anchors.length; i++){
//     anchors[i].onclick = function(e){
//         e.preventDefault();
//         const para = document.querySelector("p");
//         para.innerHTML = anchors[i].innerHTML;
//     }
// }
//.....................................................
// class student{
//     biodata(name, age, dob, gradution){
//         this.name1 = name;
//         this.age1 = age;
//         this.gradution1 = gradution;

//         this.family = ()=>{
          
//         }
//     }
// }

// let user = new student("surya", 23, 9-11-2001, "b-tech");
// console.log(user);

// .......................................................................................
// console.log("false" - 8 - true + "7")
// console.log(false - 8 - true +"7")

// const a = {
//     x:1
// }
// const b = {
//     x:1
// }
// a['x']===b['x']
// a!==b
// a===b
// a.x ===b.x

// const obj1 = {
//     name : "Surya",
//     age : 22,
//     printDetails(){
//         console.log(this.name," : ",this.age)
//     }
// }

// const obj2 = {
//     name : "avatar",
//     director : "Jamescamren "
// }

// obj1.printDetails()



