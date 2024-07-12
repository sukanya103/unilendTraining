// const first_name = document.querySelector("#firstname");
// const last_name = document.querySelector("#lastname");
// const gender = document.querySelector("#gender");
// const dob = document.querySelector("#DOB");
// const submit = document.querySelector("#submit");
const form = document.getElementById("form");
const tbody= document.querySelector("#tbody");

counter=0; //incrementing sr no.

form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  const inputs = {};
  const row=document.createElement("tr");
  const sr=document.createElement("td");
  sr.innerHTML = counter+1;
  row.appendChild(sr)
  for (let i = 0; i < e.target.length - 1; i++) {
    inputs[e.target[i].id] = e.target[i].value; //input["firstname"] ="kjbkjb"
    const data=document.createElement("td");
    data.innerHTML = e.target[i].value;
    row.appendChild(data)
  }

  tbody.appendChild(row)
  counter++; //only for sr no.
  
  
//   loadData();
});

// function loadData (){
//     for( let i=0; i<list.length; i++){
//        console.log(list[i]);
//        const row=document.createElement("tr");
//        const data1=document.createElement("td");
//        data1.innerHTML=i+1;
//        const data2=document.createElement("td");
//        data2.innerHTML=list[i].firstname;
//        const data3=document.createElement("td");
//        data3.innerHTML=list[i].lastname;
//        const data4=document.createElement("td");
//        data4.innerHTML=list[i].DOB;
//        const data5=document.createElement("td");
//        data5.innerHTML=list[i].gender;
//        const data6=document.createElement("td");
//        data6.innerHTML=list[i].contactno;
//        row.appendChild(data1)
//        row.appendChild(data2)
//        row.appendChild(data3)
//        row.appendChild(data4)
//        row.appendChild(data5)
//        row.appendChild(data6)
//        tbody.appendChild(row)
//     }
// }
