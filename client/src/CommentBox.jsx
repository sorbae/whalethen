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

  getComments() {
    const { event, timelineId, day } = this.props;
    axios.get(`/comments/${timelineId}/${day.day}/${event._id}`)
      .then((comments) => {
        if (this.state.comments !== comments) {
          this.setState({ comments: comments.data });
        }
      })
      .catch(err => console.error('Error retrieving comments:', err));
  }

  addComment(e) {
    if (e.key === 'Enter') {
      if (this.props.user) {
        const options = {
          eventId: this.props.event._id,
          timelineId: this.props.timelineId,
          day: this.props.day.day,
          username: this.props.user.username,
          text: e.target.value,
        };
        e.target.value = '';
        this.props.increment();
        axios.post('/newComment', options)
          .then(() => this.getComments())
          .catch(err => console.error('Error creating a comment: ', err));
      } else {
        e.target.value = 'Login to comment';
      }
    }
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <CommentForm submitComment={this.addComment} />
      </div>);
  }
}

CommentBox.propTypes = {
  user: propTypes.object.isRequired,
  event: propTypes.object.isRequired,
  timelineId: propTypes.string.isRequired,
  day: propTypes.object.isRequired,
  increment: propTypes.func.isRequired
};

export default CommentBox;
