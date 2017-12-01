import React from 'react';
import propTypes from 'prop-types';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <CommentList />
        <CommentForm />
      </div>)
  }
}