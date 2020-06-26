import React from 'react';

// this is about it for creating a context object for our data for the app
// can take in the default string or defult data we would want to start with when app loads
export default React.createContext ('english');

/**

Context object is now made! We can now pass data for our app anywhere to children by importing this
file, and simply creating a static contextType = thisFilesName;

and then we can LITERALLY access context using this.context 

this is amazing and makes the use of app level starte 'easier' however still, redux is king

 */
