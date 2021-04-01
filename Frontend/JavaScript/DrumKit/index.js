// Grab all the buttons by the class of drum
const buttons = document.querySelectorAll(".drum");

// Determines the pressed button or keyboard press character to play the corresponding sound
const determinePressed = (character) => {
  // Play sound for the button that was pressed - can use a switch for fast check
  switch (character) {
    case "w":
      const audioW = new Audio("./sounds/tom-1.mp3");
      audioW.play();
      break;
    case "a":
      const audioA = new Audio("./sounds/tom-2.mp3");
      audioA.play();
      break;
    case "s":
      const audioS = new Audio("./sounds/tom-3.mp3");
      audioS.play();
      break;
    case "d":
      const audioD = new Audio("./sounds/tom-4.mp3");
      audioD.play();
      break;
    case "j":
      const audioJ = new Audio("./sounds/crash.mp3");
      audioJ.play();
      break;
    case "k":
      const audioK = new Audio("./sounds/kick-bass.mp3");
      audioK.play();
      break;
    case "l":
      const audioL = new Audio("./sounds/snare.mp3");
      audioL.play();
      break;
    default:
      alert("unknown sound");
  }
};

// The event callback - using ES6
const handleClick = (e) => {
  // Get the button that was clicked - can determine this by the index 0 of the classlist which colds the letter of the specific button
  // or we can use .innerHTML of course --- i did this for practice with destructuring
  const [btnTarget] = e.target.classList;
  determinePressed(btnTarget);
  animation(btnTarget);
};

// Get the key pressed to then determine which sound to generate also -- will be very similar to the determineBtnPressed logic
const handlePress = (e) => {
  // get the keyboard character proessed and converr it to char..look this up on stackoverflow if needed
  const keyCode = String.fromCharCode(e.which || e.keyCode);
  determinePressed(keyCode);
  animation(keyCode);
};

// Will create a little animation when the icon is pressed or the corresponding key is pressed
const animation = (char) => {
  // Dynamnically grab the element that was pressed/clicked from the keycode or classlist[0]
  const queried = document.querySelector(`.${char}`);

  // add the pressed style to it
  queried.classList.add("pressed");

  // remove this style after .300ths of second
  setTimeout(() => {
    queried.classList.remove("pressed");
  }, 300);
};
// Add the event listener to each button for click
buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

// Add event listener to the key presses and get the characterCode of it
addEventListener("keypress", handlePress);

/**
 * The above logic is how we add styles in JS and dunamically change the look, feel, and state of an app
 * by appearance or in logic! Select elements, get some data in it, assign some classes from css,
 * remove classes, etc. if needed with timeouts or toggles. This flow is consistent for many apps!
 *
 * The event listener functions are really sleek too and often building them outself the event lstener method is better
 * if the event logic is long winded like ours were. So, this is another design pattern and practice of how these things work
 *
 * Lastly, the switch helper function to determine the clicked/pressed btn/key is more of a desing thing for me and ease of reading
 * and ease of use. I find it easier to write a helper method that would be used multiple times, or written repeatedly in my code.. thats the
 * whole point of functions. Because of this, i simply take in the character of the button or key pressed and switch it
 * to determine the sound file to play.. The animation could be invoked here or invoked in the listeners we made.. that is how i approached it
 */
