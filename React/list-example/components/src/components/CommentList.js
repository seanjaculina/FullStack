import React from 'react'
import '../App.css';

//component imports : we call these relative path references
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

//mimick a database fetch of json comments using an array of comment objects that we pass as props down to comment
const comments = [
  {
    author: 'Tanner Barcelos',
    date: '12/04/2020',
    text: 'Hello from Tanners comment'
  },
  {
    author: 'Hayden Barcelos',
    date: '07/14/2020',
    text: 'Hello from Haydens comment'
  },
  {
    author: 'Tiarra d',
    date: '05/11/2020',
    text: 'Hello!!'
  },
  {
    author: 'Tiarra n',
    date: '05/11/2020',
    text: 'Hello!!'
  },
  {
    author: 'Tiarra dcwwc',
    date: '05/11/2020',
    text: 'Hello!!'
  }
]

const CommentList = (props) => {
  return (
    //this class is a semantic ui bootstrap class 
    <div className="ui container comments">
      {/*
        In order to render n-components of the same type, we use map over an array of some data, and we can 
        rerturn the component passing it desired props.In our case we made a static array of comment info to 
        mimic a JSON file whihc is mosstly how wed be making web apps (using a database to gather and retreive data
        to render on the front end) which a component does for us. Notice that we had to nest all this in its own comment div
        because we always must return one container div in react components

        Remember, in JSX we have this similar to string interpolation syntax for anything javascript, (strings, numbers,
        etc. do not need {} unless they are in an object, etc. You CANNOT render an object itself as text. you 
        MUST parse it and use {}) etc
        so name = {js expression or code to represent this}, etc. 

        so see the actual map expression MUST be in its own respective {} as well
      */}
      {comments.map(comment => {
        return (
          //returning the approval card component which will have an approve or reject comment on it
          //and we actually return it like its an html element, and pass the comment component into it. 
          // this whole passing of component is passing by a prop! But to pass a component, we do it this way
          //mimicking an html style div so to speak, but really it is the parent
          <ApprovalCard>
            <Comment name={comment.author} date={comment.date} text={comment.text} key={comment.author} />
          </ApprovalCard>
        )
      })}
    </div>
  )
}

/**
 * This component is a list that will hold comments. We can design an app like this to make the app cleaner and easier to read.
 * In this component, we can render a bunch of comments. In our case, the comments will be an array of some coded fake comments,
 * but, in reality, wed get data from our database using our backend, and pass those reponses as props to the comment component itself
 * to be able to customize a comment component that is dynamic. 
 * 
 * In order to generate n component comments, we use map() from JS. This is a msut in JSX/React. To generate a bucnh of duplicate 
 * components say for a comment feed, etc. we use the collection of comments, or anything, and map those objects out
 * returning a sub component with props (in our case,a  comment component in this list component)
 * 
 * props are needed such that each comment can extract the data for that comment component, for example so each one is different
 * That it, when using map, that object we represent each index as will contain all comment data in which we can pass as a prop
 * for a data, name, comment tect, etc
 * 
 * this idea can be used for anything. If we fetched json data on nfl player stats, we can literally make this exact same list 
 * style app where every comment card could be renamed as 'player' and that player woul contain a bunchj of rendered prop data
 * in which exists in the JSON file we got from the web [see chaucodes nba app]
 * 
 * this list component is then passed up into App which is attached to root div in html and rendered using ReactDOM
 */

export default CommentList;