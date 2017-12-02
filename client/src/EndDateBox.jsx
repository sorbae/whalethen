import React from 'react';
import propTypes from 'prop-types';

const EndDateBox = ({ onInput, onEnter, startDate }) => (
  <div className="inputBox label">
    <label className="endDate" htmlFor="endDate">
      End Date:
      <input
        id="endDate"
        type="date"
        min={startDate}
        name="endDate"
        onChange={event => onInput(event)}
        placeholder="enter an end date"
        onKeyUp={event => onEnter(event)}
      />
    </label>
  </div>
);

EndDateBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
  startDate: propTypes.string.isRequired,
};

export default EndDateBox;
