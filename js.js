const addbtn = document.getElementsByName("add")[0];
const subbtn = document.getElementsByName("sub")[0];
const mulbtn = document.getElementsByName("mul")[0];
const divbtn = document.getElementsByName("div")[0];

const ansdiv = document.getElementsByTagName("div")[0];


function func(a1,a2,op){
    if(op=="+"){
        return a1 + a2;
    }
    else if(op=="-"){
        return a1-a2;
    }
    else if(op=="*"){
        return a1*a2;
    }
    else if(op=="/"){
        return a1/a2;
    }
}

addbtn.addEventListener("click", ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value)
    const rs = func(num1, num2, "+");  // can do it another way like (num1 + num2) stored it in directly rs ; ;
    ansdiv.innerText =  rs;
});

subbtn.addEventListener("click", ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const rs = func(num1, num2, "-");
    ansdiv.innerText =  rs;
});

mulbtn.addEventListener("click", ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const rs = func(num1, num2, "*");
    ansdiv.innerText =  rs;
});

divbtn.addEventListener("click", ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const rs = func(num1, num2, "/");
    ansdiv.innerText =  rs;
});
