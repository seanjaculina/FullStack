//const buttons = document.querySelectorAll('button');

// can do this, function keyword or named function and use the onclick property on the button to trigger onclick events
// button.onclick = () => {
//   alert('clicked')
// }
// this is fine but will limit us to one event handler! use addEventListener()'s to buttons, elemenets to invoke some event: we will 
// override the onclick method if we try doing it this wrong way

// const sayHi = (e) => {
//   //alert('hi')
//   // the event object can be named anything, but we typically name it 'e' and it will give us access to all the event object properties to give us info 
//   // on the element when the event was initiated
//   console.log(e)
// }

// //const bindEvent = sayHi.bind(this);

// // grabbed multiple buttons so use foreach to loop that 'array' adding event listeners to each
// buttons.forEach(btn => btn.addEventListener('click', sayHi))

// after two seconds, remove the event listener
// setTimeout(() => {
//   // must have the exact event and function we used when making an event listener when using removeEventlistener()
//   button.removeEventListener('click', sayHi)
// }, 2000);


/**
 * Bubbling example: we put an event on the div and the button thats inside it. Two events exist, but bubbling will invoke the source fired
 * event first then bubble up every layer in that content box all the way to the body invoking in that bottom-up order any ancestor events
 * 
 * we can put it into the opposite mode, called CAPTURING mode but applying a true keyword to third param of event listener, and this will
 * run the events in the parsing order of the dom, so top-down methodology invoking events from outter to inner, even though if the button was the inner
 * most elememnnt of the block it will still invoke its even last: see example below
 */

const button = document.querySelector('button');
const div = document.querySelector('div');

div.addEventListener('click', () => {
  console.log('Hello from the div')
} /*, true*/ )
//uncomment true and it will invoke capturing on the div which means that the nested button will actually fire its event off after the divs even though we clicked the button.
// we often do not want this, but thats how it works

button.addEventListener('mouseover', e => {
  // will stop propagation (bubbling) up of an event on this button: so it will 100% not trigger any of these buttones ancestors, so, div will not invoke its event
  e.stopPropagation();
  console.log('hello from the button');
  console.log(e)
})

// there are some events that dont propagate so they do not fall into a bubbling phase

// lets apply list item background color on/off when a click is made on any list item.. we could make event listeners
//on each but since the ul wraps the list items we actually can use EVENT DELEGATION such that one type of event can be put on the whole list
// and it will delegate to every list item

//grab the ul
const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
  e.target.closest('li').classList.toggle('highlight') //will add/remove a class to the element without needing to use if checks and classlist.add/remove more easily
  // this with .add/remove on classlist is how we do dynamic styling, etc. in javascript. this makes the site so damn interactive
});

// delegation has issues when we want to put inner event listers like a checkbox on a todo that will change the todo state, like its color
// and so we can use .closest('css selector any').classList.whatever or anything for our engineering purposes and it will actuall invoke the event on the closest
// desired element. which is super cool. 