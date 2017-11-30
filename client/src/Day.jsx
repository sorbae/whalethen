import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import { ItemTypes } from './Constants';
import Event from './Events';
import CreateEventBox from './CreateEventBox';
import { updateEvent } from './Drop';

const eventTarget = {
  drop(props) {
    updateEvent(props.day.day, props.getTrip);
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const Day = (props) => {
  const {
    day,
    timelineId,
    connectDropTarget,
    isOver,
    onCreateEnter,
    handleNewEvent,
    handleNewAddress,
    createEvent,
    getTrip,
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
            />)
          }
        </div>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 500,
            left: 500,
            height: '300px',
            width: '600px',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'blue',
            }}
        />
      }
      </div>
    </div>,
  );
};


Day.propTypes = {
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
  connectDropTarget: propTypes.func.isRequired,
  isOver: propTypes.bool.isRequired,
};

export default DropTarget(ItemTypes.EVENT, eventTarget, collect)(Day);
