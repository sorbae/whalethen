import axios from 'axios';

let heldEvent;

exports.observe = (event) => {
  heldEvent = event;
};

exports.updateEvent = (targetDay, updateTimeline) => (
  axios.delete(`/entry/${heldEvent.timelineId}/${heldEvent.day}/${heldEvent.event._id}`)
    .then(() => axios.post('/entry', {
      event: {
        address: heldEvent.event.address,
        name: heldEvent.event.name,
        votes: heldEvent.event.votes,
      },
      timelineId: heldEvent.timelineId,
      day: targetDay,
    })
      .then(() => updateTimeline())
      .catch(err => console.log(err)))
);

// retain the event being dragged
// when dropped
//  send a patch req to the server
//  then update the state of the app???
