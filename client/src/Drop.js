import axios from 'axios';

let selectedEvent;

exports.observe = (event) => {
  selectedEvent = event;
};

exports.updateEvent = (targetDay, updateTimeline) => (
  axios.delete(`/entry/${selectedEvent.timelineId}/${selectedEvent.day}/${selectedEvent.event._id}`)
    .then(() => axios.post('/entry', {
      event: {
        address: selectedEvent.event.address,
        name: selectedEvent.event.name,
        votes: selectedEvent.event.votes,
      },
      timelineId: selectedEvent.timelineId,
      day: targetDay,
    })
      .then(() => updateTimeline())
      .catch(err => console.log(err)))
);
