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
      <label className="createEvent" htmlFor="createEvent">
        <div className="create-input">
          <input
            id="createEventName"
            type="text"
            name="createEventName"
            placeholder="enter an event"
            onChange={handleNewEvent}
          />
          <input
            id="createEventAddress"
            type="text"
            name="createEventAddress"
            placeholder="enter an address"
            onChange={handleNewAddress}
            onKeyUp={event => onCreateEnter(event)}
          />
        </div>
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
