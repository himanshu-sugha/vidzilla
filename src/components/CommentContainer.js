import React from 'react';
import Comments from './Comments';

const CommentContainer = ({ id }) => {
  return (
    <div className='text-2xl  m-5 p-4 border-b border-gray-300'>
      Comments
      <Comments id={id} />
    </div>
  );
}

export default CommentContainer;
