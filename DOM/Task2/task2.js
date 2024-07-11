const input1= document.querySelector("#input1");
const input2= document.querySelector("#input2");
const btn= document.querySelector("#addbtn");
const msg = document.querySelector('.msg');

btn.addEventListener("click", ()=>{
   const sum= Number(input1.value) + Number(input2.value);
    msg.innerHTML=sum;
    console.log(sum);
 })