import React from 'react';

const CommentForm = ({ submitComment }) => (
  <div className="commentForm">
    <input 
      type="text" 
      onKeyUp={event => submitComment(event)}
    />
  </div>
);

export default CommentForm;