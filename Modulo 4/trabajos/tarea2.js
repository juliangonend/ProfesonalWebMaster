
let rojo =document.querySelector(".rojo")

rojo.addEventListener('click',function(){
   document.body.style="background-color:red;"
})
let azul =document.querySelector(".azul")

azul.addEventListener('click',function(){
   document.body.style="background-color:blue;"
})
let verde =document.querySelector(".verde")

verde.addEventListener('click',function(){
   document.body.style="background-color:green;"
})
let sacarcolor =document.querySelector(".sacarcolor")

sacarcolor.addEventListener('click',function(){
   document.body.style="background-color:aliceblue;"
})

function count(){
    document.getElementById("contador").textContent = document.getElementById("texto").value.length;
}

document.getElementById("texto").addEventListener("input", count);
