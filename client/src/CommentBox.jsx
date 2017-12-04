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
    this.saveComment = this.saveComment.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    const { event, timelineId, day, getNumComments } = this.props;
    axios.get(`/comments/${timelineId}/${day.day}/${event._id}`)
      .then((comments) => {
        if (this.state.comments !== comments) {
          this.setState({ comments: comments.data });
        }
      })
      .then(() => getNumComments(this.state.comments.length))
      .catch(err => console.error('Error retrieving comments:', err));
  }

  saveComment(text) {
    const options = {
      eventId: this.props.event._id,
      timelineId: this.props.timelineId,
      day: this.props.day.day,
      username: this.props.user.username,
      text,
    };
    return axios.post('/newComment', options)
  }

  addComment(e) {
    if (e.key === 'Enter') {
      if (this.props.user) {
        this.props.increment();
        this.saveComment(e.target.value)
          .then(() => this.getComments())
          .catch(err => console.error('Error creating a comment: ', err));
        e.target.value = '';
      } else {
        e.target.value = 'Login to comment';
      }
    }
  }

  render() {
    return (
      <div className="comment-box">
        <CommentList comments={this.state.comments} />
        <CommentForm addComment={this.addComment} />
      </div>);
  }
}

CommentBox.propTypes = {
  user: propTypes.object,
  event: propTypes.object.isRequired,
  timelineId: propTypes.string.isRequired,
  day: propTypes.object.isRequired,
  increment: propTypes.func.isRequired,
  getNumComments: propTypes.func.isRequired
};

export default CommentBox;
