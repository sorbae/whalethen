import React from 'react';
import propTypes from 'prop-types';

const Calendar = (props) => {
  const setDate = () => {
    const date = props.start.split('-');
    date[2] = Number(date[2]) + props.i;
    return date.join('-');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <div>i: {props.i}</div>
      <div>date: {setDate()}</div>
    </div>
  );
};

Calendar.propTypes = {
  i: propTypes.number.isRequired,
  start: propTypes.string.isRequired,
};

export default Calendar;
