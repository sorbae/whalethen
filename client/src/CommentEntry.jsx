import React from 'react';
import propTypes from 'prop-types';

const CommentEntry = ({ comment }) => (
  <div className="comment">
    <span className="commentUsername">{comment.username}</span>
    <span className="commentText">: {comment.text}</span>
  </div>
);

CommentEntry.propTypes = {
  comment: propTypes.object.isRequired,
};

export default CommentEntry;
