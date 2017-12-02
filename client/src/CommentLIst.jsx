import React from 'react';
import propTypes from 'prop-types';
import CommentEntry from './CommentEntry';

const CommentList = ({ comments }) => (
  <div className="commentList">
    {comments.map(comment => <CommentEntry comment={comment} key={comment._id}/>)}
  </div>
);

CommentList.propTypes = {
  comments: propTypes.array,
};

export default CommentList;
