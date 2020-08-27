// Grab inputs, buttons and list to append to
const task_input = document.querySelector("#task__input");
const priority_input = document.querySelector("#priority__input");
const btn = document.querySelector("#submit__task");
const task_list = document.querySelector("#list__todo-items");
const task_container = document.querySelector(".task__filler-content");

// Creates a todo item
const createTodoItem = (task, priority) => {
  const todoItem = document.createElement("DIV");

  // Add the task priority as data attribute to this div for easy sorting
  todoItem.setAttribute("data-priority", priority.value);

  // Create task paragraph
  const taskName = document.createElement("p");
  taskName.innerText = task.value;

  todoItem.appendChild(taskName);
  task_list.appendChild(todoItem);
};

// Soring logic
const sortLowestPriority = () => {};
const sortHighestPriority = () => {};

// On click event on submission, create a task and then reset the fields
btn.addEventListener("click", (e) => {
  e.preventDefault(); // sorta redundant but it's better to keep consistency to use this regardless
  createTodoItem(task_input, priority_input);
  task_input.value = "";
  priority_input.value = 0;
});
