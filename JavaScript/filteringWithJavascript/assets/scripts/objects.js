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

    //pull out all the movie info [movie in for each here, as we know, is each object of movies in our list] with destructure for cleaner syntax and then use the rest operator to get the REST of the props) [see difference from spread]
    const {info, ...other} = movie;

    //one way to pull out data with destructuring
    //pull out the title from the info
    //const {title} = info;

    //grab the current movies formatted title method
    let {getFormattedTitle} = movie;
    //getFormattedTitle = getFormattedTitle.bind (movie); //of course, we can get context to the movies 'this' in the object with just doing movie.someFunction but this isnt really good practice
    //using bind is better and a big thing in React.. remmeber: the function in the movie object we make is apart of that object, BUT it is bound to the object that calls it . so, whatever object is made for that obhect,
    //will make its own context for every object, thus, we need to either use the object to call it, or use bind to bind to the context of that object [and we get access to the data]

    //call the getformat.. on the movie object to immediately transfer the 'this' context to the movie and return the formatted title. call(), apply() and bind() are very ., very powerful
    let text = getFormattedTitle.call (movie) + ' - ';

    //apply() will do call() but apply n amount of args to apply to call on that object

    //traverse the keys of an object with for-in and then we can index the object with the key for its calue
    //use for-of for arrays
    for (const key in info) {
      //and add on the sub info of the extra name and value as a side descr
      if (key !== 'title' && key !== '_title') {
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
  if (extraName.trim () === '' || extraValue.trim () === '') {
    return;
  }

  // Make a new movie from the field inputs
  const newMovie = {
    info: {
      // // we can just pass the variables we made here if we want. Javascript will make the prop === value
      // title,

      //using a getter is great for read-only transformations
      get title () {
        return this._title;
      },

      set title (val) {
        if (val.trim () === '') {
          this._title = 'DEFAULT';
        }
        this._title = val;
      },
      [extraName]: extraValue,
    },
    // all objects should have id's
    id: Math.random ().toString (),
    //will be bound to 'this' in the calling objects context [NOT THIS OBJECT: REMEMBER THIS. SO, we need to bind to 'this' context of the object in movies]
    getFormattedTitle () {
      return this.info.title.toUpperCase ();
    },
  };

  newMovie.info.title = title;

  movies.push (newMovie); //push this movie to the array
  renderMovies (); //render out the current list of movies [this is called and updates the list with the most updated movie array... we see why react is so powerful now. this is tedious]
};

// arrow functions are bound to the context of the class they fall in to [in this case, the windown. in react: the component class
//arrows need not to know about 'this' where all other functions are bound to the object that calls it only]
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
