import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import Event from './Events';
import { updateEvent } from './Drop';
import { ItemTypes } from './Constants';
import CreateEventBox from './CreateEventBox';

const eventTarget = {
  drop({ day, getTrip }) {
    updateEvent(day.day, getTrip);
    return {};
  },
};

function collect({ dropTarget }) {
  return {
    connectDropTarget: dropTarget(),
  };
}

const Day = (props) => {
  const {
    day,
    timelineId,
    onCreateEnter,
    connectDropTarget,
    handleNewEvent,
    handleNewAddress,
    createEvent,
    getTrip,
    user,
  } = props;

  return connectDropTarget(
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
            <Event
              day={day}
              timelineId={timelineId}
              event={event}
              key={index}
              getTrip={getTrip}
              user={user}
            />)
          }
        </div>
      </div>
    </div>,
  );
};


Day.propTypes = {
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
  connectDropTarget: propTypes.func.isRequired,
};

export default DropTarget(ItemTypes.EVENT, eventTarget, collect)(Day);
