import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments () {
    const eventId = this.props.event._id;
    const timelineId = this.props.timelineId;
    const day = this.props.day.day;
    axios.get(`/comments/${timelineId}/${day}/${eventId}`)
      .then(comments => {
        if (this.state.comments !== comments) { 
          this.setState({ comments: comments.data })
         }
      })
      .catch(err => console.error('Error retrieving comments:', err))
  }

  addComment(e) {
    if (e.key === 'Enter') {
      const options = {
        eventId: this.props.event._id,
        timelineId: this.props.timelineId,
        day: this.props.day.day,
        username: this.props.user.username,
        text: e.target.value,
      }
      axios.post('/newComment', options)
        .then(() => this.getComments())
        .catch(err => console.error('Error creating a comment: ', err))
    }
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <CommentForm submitComment={this.addComment}/>
      </div>);
  }
}

CommentBox.propTypes = {
};

export default CommentBox;
