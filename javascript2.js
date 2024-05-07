const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


grandparent.addEventListener("click", () =>{
     console.log("grandparent clicked!")
},false)

parent.addEventListener("click", () =>{
    console.log("parent clicked!");
},false)

child.addEventListener("click", () =>{
    console.log("child clicked!");
},false)