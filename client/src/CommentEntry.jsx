import React from 'react';
import propTypes from 'prop-types';

const CommentEntry = ({ comment }) => (
  <div className="commentEntry">
    {`${comment.username}: ${comment.text}`}
  </div>
);

CommentEntry.propTypes = {
  comment: propTypes.string,
};

export default CommentEntry;
