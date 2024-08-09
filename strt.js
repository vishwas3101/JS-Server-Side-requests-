// let x=document.querySelector(".class");
// console.log(x);

// setTimeout(function(){/////////class ko . se access krenge 
//     x.style.color="red";
//     x.style.backgroundColor="blue";
// },4*500)


// let y=document.querySelector(".sub")
// y.style.color="blue";
// setTimeout(function(){
//     y.style.backgroundColor="yellow";
//     y.innerHTML="changed";
// },3*500)
//////////////////id ko # se access krenge

let x=document.getElementById("ele1")
x.addEventListener("click",function(){
    x.style.color="blue";
    x.style.backgroundColor="yellow";
})


let y=document.getElementById("ele2")
y.addEventListener("mousemove",function(){
    y.style.color="pink";
    z.style.backgroundColor="green"
})

y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.background="white";
})

let z=document.getElementById("ele3")
z.addEventListener("click",function(){
    x.innerHTML="owow";
    


})


let q=document.getElementById("ele3")
q.addEventListener("click",function(){
    q.style.color="pink";
})

