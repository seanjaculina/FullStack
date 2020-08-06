// Grab all the buttons by the class of drum
const buttons = document.querySelectorAll(".drum");

// Determines the pressed button or keyboard press character to play the corresponding sound
const determinePressed = (btnTarget) => {
  // Play sound for the button that was pressed - can use a switch for fast check
  switch (btnTarget) {
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
};

// Get the key pressed to then determine which sound to generate also -- will be very similar to the determineBtnPressed logic
const handlePress = (e) => {
  // get the key pressed : cross-browser safe (returns the character code ascii , not the letter so we need to convert it)
  const keyCode = String.fromCharCode(e.which || e.keyCode);
  // determine the key and play sound
  determinePressed(keyCode);
};

// Add the event listener to each button for click
buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

// Add event listener to the key presses and get the characterCode of it
addEventListener("keypress", handlePress);
