//WINDOW METHODS/OBJECTS AND PROPERTIES


//ALERT: alerts to user something
//alert('hello world')

//prompt: for non-form input
// const input = prompt('Enter something')
// console.log(input)


//confirm
//confirm('Are you sure?') ? console.log('Yes') : console.log('No')


//we can get the window height  (full width without chrom tools: uses innerHeight and width to get size relative to the top of chrome tools to the toolbar)
let height = window.outerHeight;
let width = window.outerWidth;
console.log(`Height of window: ${height}    Width of window: ${width}`);

//scroll points (horizontal and vertical )
let xScroll = window.scrollX;
let yScroll = window.scrollY;
//these will get the scroll location, if there is a scroll on the page, at any point


//in the console we can type and enter 'window' and we can see all the functions, objects, etc. available to us
// when working with dom
console.log(window)

//location property stores an object of all the network information on 'this' page
console.log(window.location.port)

//reload page with location property in window object
//window.location.reload()

//KEY: Notice when looking at the window object, or any object in console dev tools, that when a property has a function as its key/value,
//it actually displays a f (function symbol) next to it! Super cool