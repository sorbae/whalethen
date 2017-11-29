import React from 'react';
import propTypes from 'prop-types';


const StartDateBox = ({ onInput, onEnter, today }) => (
  <div className="inputBox label">
    <label className="startDate" htmlFor="startDate">
    Start Date:
    <input
      id="startDate"
      type="date"
      min={today}
      name="startDate"
      onChange={event => onInput(event)}
      placeholder="enter a start date"
      onKeyUp={event => onEnter(event)}
    />
    </label>
  </div>
);

StartDateBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
  today: propTypes.string.isRequired,
};


export default StartDateBox;
