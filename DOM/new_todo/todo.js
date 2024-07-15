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
  const container = document.querySelector(".container");
  container.innerHTML = " ";
  
  for (let i = 0; i < data.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "data");
    const p = document.createElement("p");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");

    p.innerHTML = data[i].text;
    button1.innerHTML = "Complete";
    if (data[i].complete == true) {
      button1.innerHTML = "completed";
    }

    button2.innerHTML = "delete";
    button3.innerHTML= "Edit"

    newDiv.appendChild(p);
    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    newDiv.appendChild(button3);

    container.appendChild(newDiv);

    button1.addEventListener("click", () => {
      completeTask(data[i].id); //pass function with parameters
    });

    button2.addEventListener("click", () => {
        deleteTask(data[i].id); //pass function with parameters
    });

    button3.addEventListener("click", () => {
        editTask(data[i].id); //pass function with parameters
    });
  }
}

function completeTask(id) {
  console.log(id);
  const updatedarr = [];

  for (let i = 0; i < arr.length; i++) {
    if (id == arr[i].id) {
      const obj = {
        id: arr[i].id,
        text: arr[i].text, //
        complete: true,
      };
      updatedarr.push(obj);
    } else {
      updatedarr.push(arr[i]);
    }
  }
  arr = updatedarr;
  print(updatedarr);
}


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