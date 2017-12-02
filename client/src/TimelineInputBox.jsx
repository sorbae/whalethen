import React from 'react';
import propTypes from 'prop-types';

const TimelineInputBox = ({ onInput, onEnter }) => (
  <div className="inputBox label">
    <label className="timelineName" htmlFor="timelineName">
    Timeline Name:
    <input
      type="text"
      name="timelineName"
      onChange={event => onInput(event)}
      placeholder="enter a name"
      onKeyUp={event => onEnter(event)}
    />
    </label>
  </div>
);

TimelineInputBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
};

export default TimelineInputBox;
