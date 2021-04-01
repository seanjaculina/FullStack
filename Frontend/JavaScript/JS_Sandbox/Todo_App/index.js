//define UI variables
const form = document.querySelector('#task-form');        //the form for input
const taskList = document.querySelector('.collection');   //the UL that holds the li's
const clearBtn = document.querySelector('.clear-tasks');  //the clear-tasks button
const filter = document.querySelector('#filter');         //the filter for certain tasks to show up as user types on the screen
const taskInput = document.querySelector('#task');        //the input field to grab a task when making a new node



//load all event listeners
loadEventListeners();

function loadEventListeners () {

  //Add task event to the list on add task submit
  form.addEventListener('submit', addTask);

}

//add task to the list
function addTask (e) {

  //avoid empty todo
  if (taskInput.value === '') {
    alert('Add a task');
  }

  //grab the todo text in the new task field
  const todoTask = document.createTextNode(taskInput.value)

  //create a new list item
  const li = document.createElement('LI');
  li.className = 'collection-item';   // <- the materialize bootstrap class name [must use to have that styling]
  li.appendChild(todoTask);

  //putting a link and icon in that list item
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';   //materialize link style
  //add the icon as an html element
  link.innerHTML = '<i class="fa fa-remove"></i>'

  //apend the link to the list item [so the li can contain the link, text and icon]
  li.appendChild(link);

  //append the whole new todo item to the root ul!! THIS IS OBVIOUSLY THE MOST IMPORTANT PART
  taskList.appendChild(li);

  //clear input after it is added
  taskInput.value = '';

  e.preventDefault();
}