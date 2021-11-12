//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event-Listeners
todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event) {
  event.preventDefault();

  //Creating Todo Div
  const todoDiv = document.createElement("div");
  //Adding the class to the div
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = "Hello";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //Appending to the list
  todoList.appendChild(todoDiv);
}
