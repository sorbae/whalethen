import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';
import Calendar from './Calendar';

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
      return <Calendar events={timelineData} start={startDate} />;
    }
    return _.map(timelineData, (day, i) => (<DayView timelineId={timelineId} day={day} key={i} onCreateEnter={onCreateEnter} handleNewEvent={handleNewEvent} handleNewAddress={handleNewAddress} createEvent={createEvent} getTrip={getTrip} />));
  };

  const view = displayView();

  return (
    <div className="container timeline">
      <div>{timelineName}</div>
      <div className="container day">
        {view}
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
