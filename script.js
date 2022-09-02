"strict";

const div = document.querySelector("#popup-form");
const todo = document.querySelector(".todo-container");

function openForm() {
  div.style.display = "block";
}

function closeForm() {
  div.style.display = "none";
}
function closeTodo() {
  todo.style.display = "none";
  div.style.display = "none";
}

// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const memo = document.querySelector("ul");
// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  const task = todoInput.value;
  if (!task) {
    prompt(" please input the field");
  }

  // todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // pending
  const pending = document.createElement("button");
  pending.innerHTML = '<i class="far fa-edit"></i>';
  pending.classList.add("pending-btn");
  todoDiv.appendChild(pending);
  pending.addEventListener("click", () => {
    form.style.display = "block";
    todoInput.value = todoDiv.innerText;
    const parent = pending.parentElement;
    parent.parentElement.removeChild(parent);
  });
  // check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");

    pending.classList.add("btn");
  }
}

// pagination
