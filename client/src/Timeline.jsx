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
  } = props;

  return (
    <div className="container timeline">
      <div>{timelineName}</div>
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
