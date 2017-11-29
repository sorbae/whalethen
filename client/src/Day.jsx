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
    getTrip,
  } = props;

  return (
    <div className="dayView">
      <CreateEventBox
        day={day.day}
        onCreateEnter={onCreateEnter}
        handleNewEvent={handleNewEvent}
        handleNewAddress={handleNewAddress}
        createEvent={createEvent}
      />
      <div className="events">
        <div className="scroll">
          {_.map(day.events, (event, index) =>
            <Event day={day} timelineId={timelineId} event={event} key={index} getTrip={getTrip} />)
          }
        </div>
      </div>
    </div>
  );
};


Day.propTypes = {
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
};

export default Day;
