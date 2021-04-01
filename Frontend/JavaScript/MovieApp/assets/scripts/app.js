const addMovieModal = document.getElementById ('add-modal');
const startAddMovieButton = document.querySelector ('header button');
const backdrop = document.getElementById ('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector ('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll ('input');
const entryTextSection = document.getElementById ('entry-text');
const deleteMovieModal = document.getElementById ('delete-modal');

//holds list of movies for local storage in the script: the dom also will need to be updated with node list to remove/add movies
const movies = [];

const toggleBackdrop = () => {
  //use toggle to turn 'on' or 'off' styles on an element
  backdrop.classList.toggle ('visible');
};

//the 'your personal movie database' title thing [shpwing and nont showing it depending on movie list length]
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

//removes the class visible from the modal div succh that the modal will dissappear till its shown again. this is how we remove styles
//dynamically to make the page seem more interactive!
const closeMovieDeletionModal = () => {
  toggleBackdrop ();
  deleteMovieModal.classList.remove ('visible');
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  //remove the movie from the array
  movies.splice (movieIndex, 1);

  //grab the movie list container in the DOM and remove the child by the index we found from searching by ID
  const listRoot = document.getElementById ('movie-list');
  listRoot.children[movieIndex].remove ();

  /**
   * Notice how we remove from array then from children [list items of the ul]. removing from the array in our script only removes the reference to the movie in our local code here so the code works right
   * but the DOM needs to physically remove the node so its no longer seen! So, we must use the found item and remove it from the children html collection (dom nodes of li's)
   */

  closeMovieDeletionModal ();
  updateUI ();
};

const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add ('visible');
  toggleBackdrop ();

  const cancelDeletionButton = deleteMovieModal.querySelector ('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector ('.btn--danger');

  confirmDeletionButton.replaceWith (confirmDeletionButton.cloneNode (true));

  confirmDeletionButton = deleteMovieModal.querySelector ('.btn--danger');

  // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(this, movieId));
  // will not work :( we only are removing the listener. We do not need to reference 'this' in the object we are calling this function on.
  //we just cclose the modal to delete the move and toggle the dark backdrop. in no way shape or form do we bind to tan object in the dom like a list elemnet to invoke some logic
  //only when the event should be bound (if not using an arrow) to change the state/reference of thisobject should we use bind

  cancelDeletionButton.removeEventListener ('click', closeMovieDeletionModal);

  cancelDeletionButton.addEventListener ('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener (
    'click',
    deleteMovieHandler.bind (this, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement ('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener (
    'click',
    startDeleteMovieHandler.bind (this, id) //we are using an event listener on the movie list item: we are not using an arrow method
    //here [can of course but tutorial is teaching us point of bind] and so we need to bind the callbacck to 'this' element in the dom and pass it an id
    //so we can use the id to search the movie to delete. Bind always is negated when using () => funcitons (as we know in our react issues [which is a javascript thing])
    //this is just showing that in order to call functions on elements in the dom dynamically, we lose context to 'this' objects context thus, the function will not know what to
    //do and on what, so, binding to 'this' like this is the best way to do this
  );
  const listRoot = document.getElementById ('movie-list');
  listRoot.append (newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove ('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add ('visible'); //add the visible class to the modal to show it (css will do al the nice animation, as we know)
  toggleBackdrop ();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal ();
  toggleBackdrop ();
  clearMovieInput ();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim () === '' ||
    imageUrlValue.trim () === '' ||
    ratingValue.trim () === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert ('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random ().toString (),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push (newMovie);
  console.log (movies);
  closeMovieModal ();
  toggleBackdrop ();
  clearMovieInput ();
  renderNewMovieElement (
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI ();
};

const backdropClickHandler = () => {
  closeMovieModal ();
  closeMovieDeletionModal ();
  clearMovieInput ();
};

//events to change style and things do not need binding: only when we need to change the DOM or reference data from one element
//locally to a function without using ()=>  we should bind bind does nothing more than bind the method to the object in which it is called upon such that we can hook in to its 'this' context and local state and work with it
startAddMovieButton.addEventListener ('click', showMovieModal);
backdrop.addEventListener ('click', backdropClickHandler);
cancelAddMovieButton.addEventListener ('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener ('click', addMovieHandler);

/**
 * Event listeners must bind the event method to the item it is called on so we keep within the context of 'this' object (As we have seen a common issue in listeners on the react dom
 * objects too [which was said to us IT IS A JAVASCRIPT THING, HENCE DOING IT HERE]) and a way to avoid the binding issues, we can always simply use the anonymous ()=> method as often seen in 
 * events and also seen when making the methods arrow functions in react. just rmemeber if we are using a callback, we do not want to invoke it in react, we just reference the arrow function for binding 
 * but in vanillaJS like we do here, we simply bind to the function if its not anonymous, or use anonymous right within the bound event
 * 
 * the easier concept is making all event listeners anonymous to implicitely bind our events, but, we also should know about bind because bind is a big deal
 */
