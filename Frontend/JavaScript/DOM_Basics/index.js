/**
 * Target any elements on the page we need to interact with in the UI
 * that JS will manipulate
 */
const btn_1 = document.querySelector(".btn-1");
const btn_2 = document.querySelector(".btn-2");
const btn_3 = document.querySelector(".btn-3");
const resContainer = document.querySelector(".res__container");

// Get a users input (using prompt - not forms here)
const input = prompt(
  "Please enter your first and last name and age separated by a space (e.g: bob vance, 24)"
);

// parse out those input
const inputSplit = input.split(" ");
const fName = inputSplit[0];
const lName = inputSplit[1];
const age = inputSplit[2];

// function showAge(age) {
//   console.log(age);
// }
// function showName(fName, lName) {
//   console.log(fName, lName);
// }
// function showAll(fName, lName, age) {
//   console.log(fName, lName, age);
// }

// alternate version of the event-listener using 'bind'
// btn_1.addEventListener("click", showAge.bind(this, age));
// btn_2.addEventListener("click", showName.bind(this, fName, lName));
// btn_3.addEventListener("click", showAll.bind(this, fName, lName, age));

btn_1.addEventListener("click", () => {
  if (resContainer.firstChild) {
    resContainer.removeChild(resContainer.firstChild);
  }

  const div = document.createElement("DIV");
  div.classList.add("input__container");
  const h5 = document.createElement("h5");
  const text = document.createTextNode(`Your age is ${age}`);
  h5.append(text);
  div.appendChild(h5);

  const xBtn = document.createElement("button");
  xBtn.classList.add("close");
  xBtn.innerHTML = "X";
  div.appendChild(xBtn);

  xBtn.addEventListener("click", () => {
    resContainer.removeChild(resContainer.firstChild);
  });

  resContainer.appendChild(div);
});
btn_2.addEventListener("click", () => {
  if (resContainer.firstChild) {
    resContainer.removeChild(resContainer.firstChild);
  }
  const div = document.createElement("DIV");
  div.classList.add("input__container");
  const h5 = document.createElement("h5");
  const text = document.createTextNode(`Your name is ${fName} ${lName}`);
  h5.append(text);
  div.appendChild(h5);

  const xBtn = document.createElement("button");
  xBtn.classList.add("close");
  xBtn.innerHTML = "X";
  div.appendChild(xBtn);

  xBtn.addEventListener("click", () => {
    resContainer.removeChild(resContainer.firstChild);
  });
  resContainer.appendChild(div);
});
btn_3.addEventListener("click", () => {
  if (resContainer.firstChild) {
    resContainer.removeChild(resContainer.firstChild);
  }
  const div = document.createElement("DIV");
  div.classList.add("input__container");
  const h5 = document.createElement("h5");
  const text = document.createTextNode(
    `Your age is ${age} and your name is ${fName} ${lName}`
  );
  h5.append(text);
  div.appendChild(h5);

  const xBtn = document.createElement("button");
  xBtn.classList.add("close");
  xBtn.innerHTML = "X";
  div.appendChild(xBtn);

  xBtn.addEventListener("click", () => {
    resContainer.removeChild(resContainer.firstChild);
  });
  resContainer.appendChild(div);
});
