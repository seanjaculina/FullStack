// this selects an h1 element and changes its css value
//$("h1").css("color", "blue");

/**
 * We will be playing with JQuery and how to change styles, events, etc. of things in the page
 * For this, my first experiment will be clicking the first button and changing the h1 style
 *
 */

// grab the button with id btn__1 and add a click event to it that grabs a particular element (h1 for this tutorial) and changes style
$("#btn__1").click(function (e) {
  e.preventDefault();

  // check if the h1 has a class on it that it could have, and remove it or add it : acts like a toggle
  $("h1").hasClass("changeH1")
    ? $("h1").removeClass("changeH1")
    : $("h1").addClass("changeH1");
});

// the better way to use this is toggle -

// i installed an extension for jquery snippets! just do
// jq then any of the methods attached to the jq and it will auto make a cool selector and method

/**
 * challenge: target the p element in the html and use the text field to output in the p element
 * any characters etc a user types, in real time
 */

// grab the input field and paragraph tag we wish to add to
const field = $("#inp");
const p = $("p");

// add the click event to the field - on keyup to always contain last pressed key
field.keyup((e) => {
  if (!field) return;
  const char = e.target.value; // grab the character of the key press + the current value state of the input field
  p.text(char); // add it to the p
});

// so as we see, this is all vanillaJS but better and more efficient!
// it is less typing
