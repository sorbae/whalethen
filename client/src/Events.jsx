import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.event.votes,
      canHasDrag: true,
    };
    this.updateVotes = this.updateVotes.bind(this);
    this.patchVotesInDB = this.patchVotesInDB.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.preventDrag = this.preventDrag.bind(this);
    this.enableDrag = this.enableDrag.bind(this);
    this.dragEvent = this.dragEvent.bind(this);
  }
  patchVotesInDB() {
    axios.put('/entry', {
      timelineId: this.props.timelineId,
      day: this.props.day.day,
      eventId: this.props.event._id,
      votes: this.state.votes,
    });
  }
  preventDrag() {
    this.setState({
      canHasDrag: false,
    });
  }
  enableDrag() {
    this.setState({
      canHasDrag: true,
    });
  }
  dragEvent() {
    if (this.state.canHasDrag) {
      console.log('event clicked');
    }
  }
  removeEvent(e) {
    const eventId = e.target.value;
    axios.delete(`/entry/${this.props.timelineId}/${this.props.day.day}/${eventId}`)
      .then(() => this.props.getTrip())
      .catch(err => console.log(err));
  }
  updateVotes(e) {
    if (e.target.value === '+') {
      this.setState({
        votes: this.state.votes += 1,
      }, this.patchVotesInDB);
    } else {
      this.setState({
        votes: this.state.votes -= 1,
      }, this.patchVotesInDB);
    }
  }
  render() {
    return (
      <div className="event" onClick={this.dragEvent}>
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <div className="vote">{`Votes: ${this.state.votes}`}
          <button
            className="votes"
            value="-"
            onClick={this.updateVotes}
            onMouseEnter={this.preventDrag}
            onMouseLeave={this.enableDrag}
          >-
          </button>
          <button
            className="votes"
            value="+"
            onClick={this.updateVotes}
            onMouseEnter={this.preventDrag}
            onMouseLeave={this.enableDrag}
          >+
          </button>
          <button
            className="removeButton"
            onClick={this.removeEvent}
            value={this.props.event._id}
            onMouseEnter={this.preventDrag}
            onMouseLeave={this.enableDrag}
          >x
          </button>
        </div>
      </div>
    );
  }
}

Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
  getTrip: propTypes.func.isRequired,
};

export default Events;
