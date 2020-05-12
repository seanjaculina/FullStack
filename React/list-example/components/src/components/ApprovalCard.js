import React from 'react';

/**
 * This component will hold an approve/reject feature to show the comment of not, say, for an admin or MOD feature
 * of the app. This will be a bit more involved
 * 
 * The content div will actually be the whole coment component itslef! Tricky to understand, but, we can pass
 * whole components as props and in that prop object, there is a nested object called 'children' where this is the sub-component being
 * nested: as seen below, i destructured that. I easily could have left it as props, then in the function wrote:
 * 
 * const comment = props.children; but that is redundant and more typing. destructuring is cleaner
 */
const ApprovalCard = ({ children }) => {

  return (
    <div className='ui card'>
      <div className='content'>
        {children}
      </div>
      <div className='extra content'>
        <div className='ui basic green button'>Approve</div>
        <div className='ui basic red button'>Reject</div>
      </div>
    </div>
  )

}

export default ApprovalCard;