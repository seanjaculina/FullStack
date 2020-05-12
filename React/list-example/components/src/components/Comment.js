import React from 'react'
import '../App.css';

//faker library to generate fake data: we will generate fake avatars
import Faker from 'faker';

//this components represents a comment card in a list of comments. we pass it three props we destructured in the params
//to make readability and design more clean
const Comment = ({ name, date, text }) => {
  return (
    <div className="comment">
      <a href='/' className='avatar'>
        {/*make the source a jsx expression of a fake avatar from faker library*/}
        <img alt='avatar' src={Faker.image.avatar()} />
      </a>
      <div className="content">
        <a href='/' className='author'>{name}</a>
      </div>
      <div className='metadata'>
        <span className='date'>{date}</span>
      </div>
      <div className='text'>
        {text}
      </div>
    </div>
  )
}

//exports our component as the default export in which any other componenrt/file can use
export default Comment;