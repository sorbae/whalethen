import React from 'react';
import propTypes from 'prop-types';

const TimelineLookUp = (props) => {
  const {
    handleId,
    handleName,
    getTrip,
    onLookupEnter,
  } = props;

  return (
    <div className="inputBox">
      <label className="timelineLookUp label" htmlFor="timelineLookUp">
        Timeline Look Up:
        <input
          id="timelineLookUp"
          type="text"
          name="timelineLookUp"
          onChange={handleId}
          placeholder="enter Id"
          onKeyUp={event => onLookupEnter(event)}
        />
        <input
          id="timelineLookUp"
          type="text"
          name="timelineLookUp"
          onChange={handleName}
          onKeyUp={event => onLookupEnter(event)}
          placeholder="enter Name"
        />
        <button className="searchSubmit" onClick={getTrip}>Search ID</button>
        <button className="mapView">Map View</button>
      </label>
    </div>
  );
};

TimelineLookUp.propTypes = {
  handleId: propTypes.func.isRequired,
  handleName: propTypes.func.isRequired,
  onLookupEnter: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
};

export default TimelineLookUp;
