const input= document.querySelector("#input");
const btn= document.querySelector("#button");
const box= document.querySelector(".box");
const msg = document.querySelector('.msg');

btn.addEventListener("click", ()=>{
   var ishex = /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(input.value)
   if(ishex){
    msg.innerHTML=''
       box.style.background=input.value; 
    }  else {
       msg.innerHTML = '<h1>wrong hex</h1>'
       box.style.background='white';
    }

})