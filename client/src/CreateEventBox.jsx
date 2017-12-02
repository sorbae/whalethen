import React from 'react';
import propTypes from 'prop-types';

const CreateEventBox = (props) => {
  const {
    day,
    onCreateEnter,
    handleNewEvent,
    handleNewAddress,
    createEvent,
  } = props;

  return (
    <div className="container createBox label">
      <div className="dayTitle">Day {props.day}</div>
      <label className="createEvent" htmlFor="createEvent">
        <input
          className="createEventName"
          type="text"
          name="createEventName"
          placeholder="Enter an event"
          onChange={handleNewEvent}
        />
        <input
          className="createEventAddress"
          type="text"
          name="createEventAddress"
          placeholder="Enter an address"
          onChange={handleNewAddress}
          onKeyUp={event => onCreateEnter(event)}
        />
        <button className="addEvent" onClick={() => createEvent(props.day)}>Create Event</button>
      </label>
    </div>
  );
};

CreateEventBox.propTypes = {
  onCreateEnter: propTypes.func.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
};

export default CreateEventBox;
