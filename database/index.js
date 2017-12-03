const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongo = require('mongodb');
require('dotenv').config();

Promise.promisifyAll(mongoose);
Promise.promisifyAll(mongo);

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const eventSchema = mongoose.Schema({
  name: String,
  address: String,
  rating: String,
  votes: { type: Number, default: 0 },
  latLong: { lat: String, lng: String },
});

const daySchema = mongoose.Schema({
  day: Number,
  timelineId: String,
  timelineName: String,
  events: [eventSchema],
});

const commentSchema = mongoose.Schema({
  day: Number,
  timelineId: String,
  eventId: String,
  username: String,
  text: String,
});

const userSchema = mongoose.Schema({
  googleId: String,
  username: String,
  thumbnail: String,
  trips: [], // what will be in this array?
});


const Day = mongoose.model('Day', daySchema);
const Event = mongoose.model('Event', eventSchema);
const User = mongoose.model('User', userSchema);
const Comment = mongoose.model('Comment', commentSchema);

const updateVotes = (timelineId, day, eventId, votes) => (
  Day.findAsync({
    day,
    timelineId,
  })
    .then((results) => {
      const event = results[0].events.id(eventId);
      event.votes = votes;
      return results[0].saveAsync();
    })
);

const addNewTimeline = (timelineId, numberOfDays, timelineName) => {
  const timeline = [];
  for (let day = 1; day <= numberOfDays; day += 1) {
    const newDay = new Day({ day, timelineId, timelineName });
    timeline.push(newDay);
  }
  return Promise.map(timeline, day => day.saveAsync());
};

const getTimelineById = timelineId => (
  Day.findAsync({ timelineId })
    .then(results => results.sort((a, b) => a.day - b.day))
);

const getEventAddress = (timelineId) => {
  return Day.find({ timelineId });
};

const getTimelineByName = timelineName => Day.findAsync({ timelineName });

const addEventToDay = (event, timelineId, day) => (
  Day.findOneAsync({ timelineId, day })
    .tap(model => model.events.push(event))
    .then(model => model.saveAsync())
);

const removeEventFromDay = (day, timelineId, eventId) => (
  Day.findOneAsync({ day, timelineId })
    .tap(date => date.events.pull({ _id: eventId }))
    .then(date => date.saveAsync())
    .catch(err => err)
);

const addNewEvent = (event, timelineId, day, timelineName) => {
  const newEvent = new Event(event);
  return newEvent.saveAsync()
    .then(result => addEventToDay(result, timelineId, day, timelineName));
};

const createUser = (profile, done) => {
  new User({
    username: profile.displayName,
    googleId: profile.id,
    thumbnail: profile.photos[0].value,
    schedules: [],
  })
    .save()
    .then((newUser) => {
      console.log('New user created', newUser);
      done(null, newUser);
    });
};

const createComment = (day, timelineId, eventId, username, text) => (
  new Comment({
    day,
    timelineId,
    eventId,
    username,
    text,
  }).save()
);

const getComments = (timelineId, day, eventId) => (
  Comment
    .find()
    .where('timelineId').equals(timelineId)
    .where('day').equals(day)
    .where('eventId').equals(eventId)
);

const handleUser = (profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((currentUser) => {
      if (currentUser) {
        done(null, currentUser);
      } else {
        createUser(profile, done);
      }
    });
};

module.exports.getTimelineById = getTimelineById;
module.exports.getTimelineByName = getTimelineByName;
module.exports.addNewTimeline = addNewTimeline;
module.exports.addNewEvent = addNewEvent;
module.exports.addEventToDay = addEventToDay;
module.exports.removeEventFromDay = removeEventFromDay;
module.exports.updateVotes = updateVotes;
module.exports.User = User;
module.exports.handleUser = handleUser;
module.exports.getComments = getComments;
module.exports.createComment = createComment;
module.exports.getEventAddress = getEventAddress;

