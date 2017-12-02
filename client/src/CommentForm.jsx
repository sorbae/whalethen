import React from 'react';

const CommentForm = ({ addComment }) => (
  <div className="commentForm">
    <input 
      type="text" 
      onKeyUp={event => addComment(event)}
    />
  </div>
);

export default CommentForm;