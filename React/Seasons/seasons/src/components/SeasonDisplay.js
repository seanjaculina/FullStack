import React from 'react'
import '../styles/seasonDisplay.css'

//get the season based off the following rules:
//hemisphere conversions:
/**
 * Northern Hemisphere:
 * 
 *  getCurrentMonth returns the month 0->11 and online these numbers corresponse to a season in north/south
 *      - getCurrentMonth == 0,1,2  => winter
 *      - getCurrentMonth == 3,4,5,6,7,8 => summer
 *      - getCurrentMonth == 9,10,11 => winter
 * 
 * Southern Hemisphere:
 *      - getCurrentMonth == 0,1,2  => summer
 *      - getCurrentMonth == 3,4,5,6,7,8 => summer
 *      - getCurrentMonth == 9,10,11 => summer
 *      
 */

//community conventions: put all config objects and helpers above the functional component
//always use config objects to simplify data gathering

//config object for our icones: this is a good design pattern
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s chilly',
    iconName: 'snowflake'
  }
}

//its best to move all logic we can outside a components so the component is only truly focused on rendering UI and not doing computation
const getSeason = (lat, month) => {
  //summer in north is only 3-8 else it is winter we can determine north based off if lat > 0 else its in south
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

//a simple functional component that takes in the latitude to display a seasonal display message based off it 
//on the users season
const SeasonDisplay = ({ lat }) => {

  //determine the season by calling the function
  const season = getSeason(lat, new Date().getMonth());

  //based off the season, pass the season into our config object we made to return the
  //the key value pair of text and icon string and destructure those two properties wit ES6
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      {/*icon is interpolated from the ternary above and create a full semantic ui class string to get the desired icon from the CDN
      every string in here is a class in semantic UI except for icon-left and right*/}
      <i className={`icon-left ${iconName} icon massive`} />
      <h1 className="main-msg"> {text} </h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div >
  )
}

export default SeasonDisplay;