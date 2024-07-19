const input = document.querySelector("#input");
const button = document.querySelector("#button");


let arr = [];

button.addEventListener("click", () => {
  const obj = {
    id: arr.length + 1,
    text: input.value,
    complete: false,
  };

  arr.push(obj);
   input.value=" "
  print(arr);
});

function print(data) {
  const list = document.querySelector(".list");
  list.innerHTML = " ";
  
  for (let i = 0; i < data.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "demo");
    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "buttons");

    const p = document.createElement("p");
   
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");

    p.innerHTML = data[i].text;
   

    button2.innerHTML = "delete";
    button3.innerHTML= "Edit"

    newDiv.appendChild(p);
    
    newDiv2.appendChild(button2);
    newDiv2.appendChild(button3);
    newDiv.appendChild(newDiv2)

    list.appendChild(newDiv);

    

    button2.addEventListener("click", () => {
        deleteTask(data[i].id); //pass function with parameters
    });

    button3.addEventListener("click", () => {
        editTask(data[i].id); //pass function with parameters
    });
  }
}

// function completeTask(id) {
//   console.log(id);
//   const updatedarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (id == arr[i].id) {
//       const obj = {
//         id: arr[i].id,
//         text: arr[i].text, //
//         complete: true,
//       };
//       updatedarr.push(obj);
//     } else {
//       updatedarr.push(arr[i]);
//     }
//   }
//   arr = updatedarr;
//   print(updatedarr);
// }


function deleteTask(id){
    console.log(id)
    let dele=[]
    for(let i=0; i<arr.length; i++){ 
    if(id != arr[i].id){
        dele.push(arr[i]);
    }
    }
    arr= dele;
    print(dele)
}

function editTask(id) {
    console.log(id);
    const editarr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (id == arr[i].id) {
        const obj = {
          id: arr[i].id,
          text: input.value, //
          complete: arr[i].complete,
        };
        editarr.push(obj);
      } else {
        editarr.push(arr[i]);
      }
    }
    input.innerHTML=" "
    arr = editarr;
    print(editarr);
  }