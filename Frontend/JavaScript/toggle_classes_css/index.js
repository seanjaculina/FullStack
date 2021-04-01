//we will use event propogation: that is, we will set an event handler on the whole ul of the list, and be able to have event handlers on
//every li in its descendant tree

let changeActives = document.getElementById ('ulMain');

changeActives.addEventListener ('click', e => {
  //e.preventDefault ();

  let target = e.target;
  //check if the current target has a class. If so, remove that class
  if (target.classList.contains ('active')) {
    target.classList.remove ('active');
  } else {
    //else, add active to the currently selected item. Remove active class from the previously active items

    target.classList.add ('active');
  }
});
