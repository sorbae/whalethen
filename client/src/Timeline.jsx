import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';

const Timeline = (props) => {
  const {
    timelineData,
    timelineId,
    timelineName,
    onCreateEnter,
    handleNewEvent,
    handleNewAddress,
    createEvent,
    getTrip,
    user,
  } = props;

  return (
    <div className="container timeline">
      {timelineName}
      <div className="container day">
        {_.map(timelineData, (day, index) => (
          <DayView
            timelineId={timelineId}
            day={day}
            key={index}
            onCreateEnter={onCreateEnter}
            handleNewEvent={handleNewEvent}
            handleNewAddress={handleNewAddress}
            createEvent={createEvent}
            getTrip={getTrip}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
  timelineId: propTypes.string.isRequired,
};

export default Timeline;
