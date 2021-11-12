//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event-Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//Functions

function addTodo(event) {
  event.preventDefault();

  //Creating Todo Div
  const todoDiv = document.createElement("div");
  //Adding the class to the div
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
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

  //clear Todo Input value
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  //Delete Todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;

    //Animation
    todo.classList.add("fall");

    //adding a event listener the function will wait until the transition finishes then it will remove it
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    //This is done to remove the todo from the DOM
  }

  //Check Mark
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
