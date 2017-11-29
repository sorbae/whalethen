import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.event.votes,
    };
    this.updateVotes = this.updateVotes.bind(this);
    this.patchVotesInDB = this.patchVotesInDB.bind(this);
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
    console.log(this.props.timelineId)
    axios.delete(`/entry/${eventId}`)
      .then(res => console.log(res))
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
      <div className="event">
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <div className="vote">{` Votes: ${this.state.votes}   `}
          <button className="votes" value="-" onClick={this.updateVotes}>-</button>
          <button className="votes" value="+" onClick={this.updateVotes}>+</button>
        </div>
        <button className="removeButton" onClick={this.removeEvent} value={this.props.event._id}>x</button>
      </div>
    );
  }
}

Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
};

export default Events;
