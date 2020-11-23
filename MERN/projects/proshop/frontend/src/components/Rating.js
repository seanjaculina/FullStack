import React from 'react';
import PropTypes from 'prop-types'; // allows strict prop-type checking. Produces warning for any rendered components with props that should have been there, but were not

const Rating = ({value, text, color}) => {
  return (
    <div className="rating">
      <span>
        <i style={{color}} className={value >= 1 ? 'fas fa-star': value >= 0.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
        <i style={{color}} className={value >= 2 ? 'fas fa-star': value >= 1.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
        <i style={{color}} className={value >= 3 ? 'fas fa-star': value >= 2.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
        <i style={{color}} className={value >= 4 ? 'fas fa-star': value >= 3.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
        <i style={{color}} className={value >= 5 ? 'fas fa-star': value >= 4.5 ? 'fas fa-star-half-alt': 'far fa-star'}></i>
      </span>
      {/* if there is text, show it. Else, show nothing. Since the else would be : '' , we can negate for && */}
      <span>{text && text}</span>
    </div>
  )
}

// Default props instead props were not passed! Cool!
Rating.defaultProps = {
  color: "#f8e825"
}

// Allows for warning of strict prop types/requirements for what should be passed
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating;
