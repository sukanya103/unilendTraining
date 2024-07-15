// const first_name = document.querySelector("#firstname");
// const last_name = document.querySelector("#lastname");
// const gender = document.querySelector("#gender");
// const dob = document.querySelector("#DOB");
// const submit = document.querySelector("#submit");
const form = document.getElementById("form");
const tbody= document.querySelector("#tbody");
var counter=0;
let list = [] //incrementing sr no.

form.addEventListener("submit", (e) => {
  
  e.preventDefault();  //prevent page refreshing
  const inputs = {};

  for (let i = 0; i < e.target.length - 1; i++) {
    inputs[e.target[i].id] = e.target[i].value;   //input["firstname"] ="kjbkjb"
  }

  inputs['id']= counter+1
  counter++
  list.push(inputs) //only for sr no.
  
  
  loadData(list);
});

function handleDelete (e) {
console.log(e.target.innerHTML);
const id=e.target.innerHTML;
const filter=[];
for(let i=0; i<list.length; i++){
    if(list[i].id!=id){
        filter.push(list[i])
    }
}
list=filter
loadData(filter)
}
function loadData (list){
    tbody.innerHTML=''
    for( let i=0; i<list.length; i++){
       console.log(list[i]);
       const row=document.createElement("tr");
       const data1=document.createElement("td");
       data1.addEventListener("click", handleDelete)
       data1.innerHTML=list[i].id;
       const data2=document.createElement("td");
       data2.innerHTML=list[i].firstname;
       const data3=document.createElement("td");
       data3.innerHTML=list[i].lastname;
       const data4=document.createElement("td");
       data4.innerHTML=list[i].DOB;
       const data5=document.createElement("td");
       data5.innerHTML=list[i].gender;
       const data6=document.createElement("td");
       data6.innerHTML=list[i].contactno;
       row.appendChild(data1)
       row.appendChild(data2) //row madhe add hotat
       row.appendChild(data3)
       row.appendChild(data4)
       row.appendChild(data5)
       row.appendChild(data6)
       tbody.appendChild(row)
    }
}
