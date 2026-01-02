function fun1(){
    console.log("Feting data...... for fun1");
} 
function fun2(){
    console.log("fun2");
}
function fun3(){
    console.log("fun3");
}
function fun4(){
    console.log("fun4");
}

//setTimeout(fun1,2000);// ONCE
//setInterval(fun2,3000);//INFINITY
clearInterval(id);//clears the interval
  let id = setInterval(fun1,1000);// calls fun1 every seconds

setTimeout(()=>{//
    clearInterval(id);//clears the interval after 10 seconds
},10000);// INFINITY WITH SATURATION TIME




// fun4();
