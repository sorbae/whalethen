import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';
import { observe } from './Drop';
import CommentBox from './CommentBox';

const eventSource = {
  beginDrag({ event, day, timelineId }) {
    const selectedEvent = {
      event,
      timelineId,
      day: day.day,
    };
    observe(selectedEvent);
    return selectedEvent;
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.event.votes,
      commentView: false,
      numComments: 0    
    };
    this.updateVotes = this.updateVotes.bind(this);
    this.patchVotesInDB = this.patchVotesInDB.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.incrementNumComments = this.incrementNumComments.bind(this);
  }
  patchVotesInDB() {
    axios.put('/entry', {
      timelineId: this.props.timelineId,
      day: this.props.day.day,
      eventId: this.props.event._id,
      votes: this.state.votes,
    });
  }
  removeEvent(e) {
    const eventId = e.target.value;
    axios.delete(`/entry/${this.props.timelineId}/${this.props.day.day}/${eventId}`)
      .then(() => this.props.getTrip())
      .catch(err => console.log(err));
  }
  updateVotes(e) {
    if (e.target.value === '+' && this.state.votes <= this.state.origin) {
      this.setState({
        votes: this.state.votes += 1,
      }, this.patchVotesInDB);
    } else if (e.target.value === '-' && this.state.votes >= this.state.origin) {
      this.setState({
        votes: this.state.votes -= 1,
      }, this.patchVotesInDB);
    }
  }
  incrementNumComments() {
    this.setState({ numComments: this.state.numComments + 1 });
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    const commentBox =
      (<CommentBox
        timelineId={this.props.timelineId}
        day={this.props.day}
        event={this.props.event}
        user={this.props.user}
        increment={this.incrementNumComments}
      />);

    return connectDragSource(
      <div className="event" style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <div className="vote">{`Votes: ${this.state.votes}`}
          <button className="votes" value="-" onClick={this.updateVotes}>-</button>
          <button className="votes" value="+" onClick={this.updateVotes}>+</button>
          <button className="removeButton" onClick={this.removeEvent} value={this.props.event._id}>x</button>
          <button onClick={() => this.setState({ commentView: !this.state.commentView })} className="comments"> 
            Comments
            {this.state.numComments > 0 && <span className="numComments">{this.state.numComments}</span>}
          </button>
          {this.state.commentView && commentBox}
        </div>
      </div>,
    );
  }
}

Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
  getTrip: propTypes.func.isRequired,
  connectDragSource: propTypes.func.isRequired,
  isDragging: propTypes.bool.isRequired,
  user: propTypes.instanceOf(Object).isRequired
};

export default DragSource(ItemTypes.EVENT, eventSource, collect)(Events);
