//working with the dom
const h1_data = document.getElementById('_classing-h1');
h1_data.innerText = 'Task Master';

//grabbing an element and adding dom elements to it dynamically
const divList = document.getElementById('addList');

//creating an unordered list and designating it as the root for our li's
const UL = document.createElement('UL');
UL.id = 'ulMain';


divList.appendChild(UL)

//using event delegationt to assign a delete event handler to the buttons
const del = document.getElementById('ulMain');
const add = document.getElementById('add-task');
const clear = document.getElementById('clear-tasks');


/////////////////USING ES6 FUNCTION STATEMENTS///////////

//delete a tasks
const deleteTask = (e) => {
    e.preventDefault();
    //target the button pressed, and get the super parent (the li we want to remove)
    const button_pressed = e.target.parentElement.parentElement.parentElement;
    //remove the li as a child
    UL.removeChild(button_pressed)
}

//add a tasks
const addTask = (e) => {
    e.preventDefault();
    console.log('add')
    //create a new list item
    const LI = document.createElement('LI');
    const DIV = document.createElement('DIV');
    DIV.className = 'list-div-item';
    const P = document.createElement('P');
    const BUTTON = document.createElement('BUTTON');
    BUTTON.id = 'erase-item';
    BUTTON.innerText = 'X'; //refactor for a font awesome icon
    //refactor later (into a form and a submit event on the add button): use prompt to get users task input
    const txt = document.createTextNode(prompt('Enter task: '));
    P.appendChild(txt);
    P.appendChild(BUTTON);
    P.id = 'todo-item-value'
    DIV.appendChild(P);
    LI.appendChild(DIV);
    UL.appendChild(LI);
}

//clears all tasks
const clearAll = (e) => {
    e.preventDefault();
    //delete all tasks
    while(UL.firstChild){
        UL.removeChild(UL.firstChild);
    }
}

//event listeners
del.addEventListener('click',deleteTask);
add.addEventListener('click',addTask);
clear.addEventListener('click',clearAll);