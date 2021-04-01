//grabbing the ul that holds the todos so we can delegate click events across the whole container (that means we will event delegate / bubble down click event
//to all children elements to this ul as well! This is how we'd quicky and efficienly add an event to similar items like todo items for a ul)
const listContainer = document.querySelector('ul.collection').addEventListener('click', deleteTodo);

//delete specific todo
function deleteTodo (e) {
  e.preventDefault();

  //check if the target of the 'click' has a className of the foloowing string and if it does, go up x amount of parents till we target the li and then remove it
  if (e.target.className === 'fa fa-remove') {
    e.target.parentElement.parentElement.remove();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//grabbing root ul and also the clear all tasks button
const clearButton = document.querySelector('.clear-tasks').addEventListener('click', removeTasks);
const parentContainer = document.querySelector('ul.collection');

//delete all todos
function removeTasks (e) {
  e.preventDefault();

  let taskList = parentContainer.children;

  //show some message to the user for accessibility purposes
  if (taskList.length < 1) {
    alert('Cannot remove any more elements')
  }

  taskList = Array.from(taskList);

  taskList.forEach(el => {
    parentContainer.removeChild(el);
  });
}