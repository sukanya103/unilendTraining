const input = document.getElementById("input");
const addBtn = document.getElementById("button");
const listContainer = document.getElementById("list-container");

const todoList = [];
// {task: "my task", id: "1"}

addBtn.addEventListener("click", () => {
  let obj = { task: input.value, id: todoList.length + 1 };
  todoList.push(obj);
  console.log("TASK", todoList);

  if (input.value === "") {
    alert("Please enter value in the input");
  } else {
    const newDiv = document.createElement("div");
    const idElement = document.createElement("p");
    const taskElement = document.createElement("p");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    newDiv.setAttribute("id", "task");
    newDiv.appendChild(idElement);
    newDiv.appendChild(taskElement);
    newDiv.appendChild(editButton);
    newDiv.appendChild(deleteButton);
    idElement.innerText = obj.id;
    taskElement.innerText = obj.task;
    editButton.innerText = "EDIT";
    deleteButton.innerHTML = "DELETE";
    listContainer.appendChild(newDiv);
  }
});