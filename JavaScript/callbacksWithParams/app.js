const bombTimerEl = document.querySelector("#bomb h2");
const defuseButton = document.querySelector("button");

const AVAILABLE = 5 * 1000; // 60 seconds in milliseconds

let bombTimer;
let remainingTime = AVAILABLE;

// will initialize our countdown timer
init();

// to add params to a callback, we can bind the callback to the callee, and pass any params needed
//defuseButton.addEventListener("click", defuse.bind(this, "this is my param"));

// we can also do this using an arrow function/anonymouse function inline which is the more common approach
// i LOVE this style
defuseButton.addEventListener(
  "click",
  ((msg) => {
    // clear the interval we set
    clearInterval(bombTimer);
    alert(msg);
  }).bind(this, "Defused!") // since we do not use 'this' in our callback, we can make this argument null or pass 'this' either or does not matter in this case.. by cnvention its easiest to always pass 'this'
);

// the callback function to be passed into the event listener : this is one way of doing event listeners.. we define a function to run when an event is triggered
// and can pass a reference to it with simply the function name. however, this sometimes makes the code more verbose and confusing.. It is easier to
// use the anonymous function patterns (arrows or declaration) inline and bind when needing 'this' or params to be passed
// function defuse(msg) {
//   clearInterval(bombTimer);
//   alert(msg);
// }

function updateTimer() {
  bombTimerEl.textContent = remainingTime / 1000;
}

function init() {
  updateTimer();
  bombTimer = setInterval(function () {
    remainingTime = remainingTime - 1000;
    if (remainingTime <= 0) {
      alert("You lost!");
      clearInterval(bombTimer);
      return;
    }
    updateTimer();
  }, 1000);
}
