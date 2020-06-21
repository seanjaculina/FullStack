/**
 * See javascript folder and the objects folder for object basics:
 * this app will demonstrate even more object work
 */

//grab the two DOM buttons : using modern queryselector. if we are grabbing
//an id, do NOT forget the # and vice versa for classes and .
const addMovieBtn = document.querySelector ('#add-movie-btn');
const searchBtn = document.querySelector ('#search-btn');

// list of movies acting like our databse
const movies = [];

// Render the movies in the DOM: takes default arg of no filter, but can be filtered
const renderMovies = (filterValue = '') => {
  const movieList = document.querySelector ('#movie-list');

  //check the movie array and if its empty, take off the styling for our list div in html
  //so styling is gone but if it has data, add() a class to its classlist of name 'visible' and it will now
  //have dubamic styling: see the css for this class. it is connected to the element in the dom with a . which instantiate that style
  //as a changing, dybamic style (see acctuall css explanation)
  if (movies.length === 0) {
    movieList.classList.remove ('visible');
    return;
  } else {
    movieList.classList.add ('visible');
  }

  movieList.innerHTML = '';

  //determine if the render should be filtered render or not [if no param passed (falsy) or if it was]
  const filteredMovies = !filterValue
    ? movies
    : //returns a new array of only the filtered movies by the filter given if it was (includes() will look at the value of an indice to see if the substring exists)
      movies.filter (movie => movie.info.title.includes (filterValue));

  //loop all the movies, filtered or not
  filteredMovies.forEach (movie => {
    const movieElement = document.createElement ('li');

    //pull out all the movie info with destructure for cleaner syntax and then use the rest operator to get the REST of the props) [see difference from spread]
    const {info, ...other} = movie;
    //pull out the title from the info
    const {title} = info;

    //grab the current movies title
    let text = title + ' - ';

    //traverse the keys of an object with for-in and then we can index the object with the key for its calue
    //use for-of for arrays
    for (const key in info) {
      //and add on the sub info of the extra name and value as a side descr
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append (movieElement);
  });
};

// Add movie
const addMovie = () => {
  // Grad the add movie form fields
  const title = document.querySelector ('#title').value;
  const extraName = document.querySelector ('#extra-name').value;
  const extraValue = document.querySelector ('#extra-value').value;

  // Do some basic validation
  if (
    title.trim () === '' ||
    extraName.trim () === '' ||
    extraValue.trim () === ''
  ) {
    return;
  }

  // Make a new movie from the field inputs
  const newMovie = {
    info: {
      // we can just pass the variables we made here if we want. Javascript will make the prop === value
      title,
      [extraName]: extraValue,
    },
    // all objects should have id's
    id: Math.random (),
  };

  movies.push (newMovie); //push this movie to the array
  renderMovies (); //render out the current list of movies [this is called and updates the list with the most updated movie array... we see why react is so powerful now. this is tedious]
};

const searchMovieHandler = () => {
  const filterval = document.querySelector ('#filter-title').value;
  renderMovies (filterval);
};

//connect the event listener: the function will be auto bound to the btn
addMovieBtn.addEventListener ('click', addMovie);
searchBtn.addEventListener ('click', searchMovieHandler);

/**
 * refactor search logic to show filtered options on ever keypress
 */
