import React from 'react';
import propTypes from 'prop-types';

const SearchListEntry = (props) => {
  const {
    event,
    numberOfDays,
    addNewEvent,
    onDaySelect,
    selectedDay,
  } = props;

  const daysArr = ['Choose Day'];
  for (let i = 1; i <= numberOfDays; i += 1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div className="searchEntry">
      <div className="eventName">{event.name}</div>
      <div className="eventAddress">{event.address}</div>
      <div className="eventRating">{event.rating}</div>

      <div>
        <select className="selectDays" onChange={onDaySelect}>
          {daysArr.map(day => <option value={day} key={day}>{day}</option>)}
        </select>
      </div>

      <div>
        <button
          className="addEvent"
          onClick={() => addNewEvent(event, selectedDay)}
        >
            Add Event
        </button>
      </div>
    </div>
  );
};

SearchListEntry.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
  addNewEvent: propTypes.func.isRequired,
  onDaySelect: propTypes.func.isRequired,
  selectedDay: propTypes.number.isRequired,
  numberOfDays: propTypes.number.isRequired,
};

export default SearchListEntry;
