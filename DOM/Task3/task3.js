const input=document.querySelector("#input");
const pbtn= document.querySelector(".btn");
const msg = document.querySelector('.word');

const iparray=['zero', "one", 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];



pbtn.addEventListener("click", ()=>{
    let out = []
    // console.log(input.value);
  
    let ipvalue= input.value;
 
    for(let i=0; i<ipvalue.length; i++){
        console.log( ipvalue[i]);
        const n = ipvalue[i]
     const spell = iparray[n]
    //  output = output + spell + " "
     out.push(spell)
    }
    console.log( out.join(" "));
    msg.innerHTML = out.join(" ")
})