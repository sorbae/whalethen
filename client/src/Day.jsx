import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import Event from './Events';
import CreateEventBox from './CreateEventBox';

const Day = (props) => {
  const {
    day,
    timelineId,
    onCreateEnter,
    handleNewEvent,
    handleNewAddress,
    createEvent,
  } = props;

  return (
    <div className="dayView">
      <div className="dayTitle">Day {day.day}</div>
      <CreateEventBox
        day={day.day}
        onCreateEnter={onCreateEnter}
        handleNewEvent={handleNewEvent}
        handleNewAddress={handleNewAddress}
        createEvent={createEvent}
      />
      <div className="events">
        {_.map(day.events, (event, index) =>
          <Event day={day} timelineId={timelineId} event={event} key={index} />)
        }
      </div>
    </div>
  );
}


Day.propTypes = {
  day: propTypes.instanceOf(Object).isRequired,
};

export default Day;
