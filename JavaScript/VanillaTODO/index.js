// Grab inputs, buttons and list to append to
const task_input = document.querySelector("#task__input");
const priority_input = document.querySelector("#priority__input");
const btn = document.querySelector("#submit__task");
const task_list = document.querySelector("#list__todo-items");
const task_container = document.querySelector(".container");
const filters = document.querySelector(".filterables");
// Array to hold all todoitems for sorting purposes
const items = [];

// Creates a todo item - will be used for re-render in sorting and initial list creation
const createTodoItem = (task, priority) => {
  const listItemWrapper = document.createElement("LI");
  const todoItem = document.createElement("DIV");

  // Add the task priority as data attribute to this list item for easy sorting
  listItemWrapper.setAttribute("data-priority", priority.value);
  listItemWrapper.classList.add("list__item");

  // Create task paragraph
  const taskName = document.createElement("p");
  taskName.innerText = task.value;

  todoItem.appendChild(taskName);
  listItemWrapper.appendChild(todoItem);
  task_list.appendChild(listItemWrapper);
};

// Soring logic
const sortLowestPriority = () => {};
const sortHighestPriority = () => {};

// On click event on submission, create a task and then reset the fields
btn.addEventListener("click", (e) => {
  if (task_input.value === "") {
    alert("Must enter a task to continue");
  }

  // Create a new task
  const task = {
    task: task_input.value,
    priority: priority_input.value,
  };

  // Add task to array
  items.push(task);
  // If the list has 2+ items, display the sorting buttons
  if (items.length > 1) {
    filters.classList.add("show");
  }
  console.log(items);
  // create an li with the newly entered task
  createTodoItem(task_input, priority_input);
  task_input.value = "";
  priority_input.value = 0;
});

// console.log(
//   document.querySelectorAll(".task__filler-content ul#list__todo-items li")
//     .length
// );
