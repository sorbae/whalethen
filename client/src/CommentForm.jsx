import React from 'react';

const CommentForm = ({ submitComment }) => (
  <div className="commentForm">
    <input 
      type="text" 
      placeholder="Sup?" 
      onKeyUp={event => submitComment(event)}
    />
  </div>
);

export default CommentForm;