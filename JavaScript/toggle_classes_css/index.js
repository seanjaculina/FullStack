let box = document.getElementById ('box');
let classList = box.classList.toString (); //classlist returns the array of classes on the dom element selected [we can convert to strig, index, etc.]

addClass = () => {
  box.classList.add ('class4');
};

console.log (classList);
