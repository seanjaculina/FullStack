// Grab inputs, buttons and list to append to
const task_input = document.querySelector("#task__input");
const priority_input = document.querySelector("#priority__input");
const task_list = document.querySelector("#list__todo-items");
const task_container = document.querySelector(".container_");
const filters = document.querySelector(".filterables");

// buttons
const submitBtn = document.querySelector("#submit__task");
const highLow = document.querySelector("#sort__high");
const lowHigh = document.querySelector("#sort__low");
const trash = document.querySelector(".trashbin");

// Array to hold all todoitems for sorting purposes and an array to lightly store deleted todos
// later we will have the todos render in there in a modal and allow the user to un-delete and put back into DOM
// OR remove completely and never see that todo again
const items = [];
const trashBin = [];

// Creates a todo item - will be used for re-render in sorting and initial list creation
const createTodoItem = (task, priority, id) => {
  const listItemWrapper = document.createElement("LI");
  const todoItem = document.createElement("DIV");
  todoItem.classList.add("list__content__box");

  // Add the task priority as data attribute to this list item for easy sorting
  listItemWrapper.setAttribute("data-priority", priority);
  listItemWrapper.setAttribute("data-id_", id);
  listItemWrapper.classList.add("list__item");

  // Create task paragraph
  const taskName = document.createElement("p");
  taskName.classList.add("task__text");
  taskName.innerText = task;

  // Create delete task button for each item
  const delBtn = document.createElement("BUTTON");
  delBtn.classList.add("delete__task-btn");
  delBtn.innerText = "X";

  // To show priority of the item
  const priorityIcon = document.createElement("p");
  priorityIcon.classList.add("priority__icon");
  priorityIcon.innerText = priority;

  // Appends
  todoItem.appendChild(taskName);
  todoItem.appendChild(delBtn);
  listItemWrapper.appendChild(priorityIcon);
  listItemWrapper.appendChild(todoItem);
  task_list.appendChild(listItemWrapper);

  // add delete listener to the delete button
  delBtn.addEventListener("click", () => {
    // find the item clicked to delete and remove it from the DOM
    let index = 0; // to track where we stopped in the node list so we can delete the item from the array
    const taskNode = Array.from(task_list.children).find((node) => {
      const nodeText = node.innerText.slice(3, node.innerText.length - 3);
      index++;
      return nodeText === taskName.innerText; // this elements text
    });
    task_list.removeChild(taskNode);

    // find the index of this actual todo item in our array of items and delete it [we need to hook into the data attribute of the actual node
    // and compare it to the id in our array of todo objects : they will match]
    const indexOf = items.findIndex((itm) => {
      itm.id_ === taskNode.attributes["data-id_"];
    });
    items.splice(indexOf, 1);
  });
};

// Soring logic
const sortLowestPriority = () => {
  /**
   * Algorithm
   *
   * 1 - Remove all list items from dom (but not the array we use to store items)
   * 2 - add a spinner to the screen to simulate algorotihm running
   * 3 - sort the array descending of the items currently in the array of item
   * 4 - call the createTodoItem function on each item of the array using modern JS
   * 5 - DOM should represent the sorted low - high priority array
   */

  // remove the existing items
  while (task_list.firstChild) {
    task_list.removeChild(task_list.firstChild);
  }

  // add spinner to the UI to simnulate the algorithm running
  const spin = document.createElement("DIV");
  spin.classList.add("spinner-border", "spin");
  spin.setAttribute("role", "status");
  task_list.appendChild(spin);

  // hide the sort buttons to just make the screen UI cleaner
  highLow.style.display = "none";
  lowHigh.style.display = "none";

  // sort the array ascending
  items.sort((a, b) => a.priority - b.priority);

  // wait at least a second to remove the spinner - this is async so it waits for all other code to finish first, if needed
  setTimeout(() => {
    // wait at least one second and remove the spnner and show the new sorted list
    task_list.removeChild(spin);
    highLow.style.display = "flex";
    lowHigh.style.display = "flex";
    items.forEach((todo) => {
      createTodoItem(todo.task, todo.priority, todo.id_);
    });
  }, 500);
};
const sortHighestPriority = () => {
  /**
   * Algorithm
   *
   * 1 - Remove all list items from dom (but not the array we use to store items)
   * 2 - add a spinner to the screen to simulate algorotihm running
   * 3 - sort the array descending of the items currently in the array of item
   * 4 - call the createTodoItem function on each item of the array using modern JS
   * 5 - DOM should represent the sorted high - low priority array
   */

  // remove the existing items
  while (task_list.firstChild) {
    task_list.removeChild(task_list.firstChild);
  }

  // add spinner to the UI to simnulate the algorithm running
  const spin = document.createElement("DIV");
  spin.classList.add("spinner-border", "spin");
  spin.setAttribute("role", "status");
  task_list.appendChild(spin);

  // hide the sort buttons to just make the screen UI cleaner
  highLow.style.display = "none";
  lowHigh.style.display = "none";

  // sort the array descending
  items.sort((a, b) => b.priority - a.priority);

  // wait at least a second to remove the spinner - this is async so it waits for all other code to finish first, if needed
  setTimeout(() => {
    // wait at least one second and remove the spnner and show the new sorted list
    task_list.removeChild(spin);
    highLow.style.display = "flex";
    lowHigh.style.display = "flex";
    items.forEach((todo) => {
      createTodoItem(todo.task, todo.priority, todo.id_);
    });
  }, 500);
};

// Sort listeners
highLow.addEventListener("click", sortHighestPriority);
lowHigh.addEventListener("click", sortLowestPriority);

// On click event on submission, create a task and then reset the fields
submitBtn.addEventListener("click", (e) => {
  if (task_input.value === "") {
    alert("Must enter a task to continue");
    return;
  }

  // Create a new task
  const task_ = {
    task: task_input.value,
    priority: priority_input.value,
    id_: Math.floor(Math.random() * 13) * items.length * 3 + 1, //always use primes when doing math and randomness. Primes have this weird behavior that just works for random number gen
  };

  // Add task to array
  items.push(task_);

  // create an li with the newly entered task
  createTodoItem(task_.task, task_.priority, task_.id_);
  task_input.value = "";
  priority_input.value = 1;
});

// add logic to open modal, show the todos renders the same way in list in this trash can
// only in the modal, and allow the user to delete forever, cancel that selection of the item OR
// put back in list if it was an accident to delete
trash.addEventListener("click", () => {
  alert("Clicked trash");
});
