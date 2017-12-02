import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';
import CalendarView from './CalendarView';

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
    startDate,
    calendar,
  } = props;

  const displayView = () => {
    if (calendar) {
      return _.map(timelineData, (day, i) => (<CalendarView key={i} i={i} day={day} start={startDate} />));
    }
    return _.map(timelineData, (day, i) => (<DayView timelineId={timelineId} day={day} key={i} onCreateEnter={onCreateEnter} handleNewEvent={handleNewEvent} handleNewAddress={handleNewAddress} createEvent={createEvent} getTrip={getTrip} />));
  };

  return (
    <div className="container timeline">
      <div>{timelineName}</div>
      <div className="container day">
        {displayView()}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
  timelineId: propTypes.string.isRequired,
  timelineName: propTypes.string,
  startDate: propTypes.string,
  onCreateEnter: propTypes.func.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
  calendar: propTypes.bool,
};

export default Timeline;
