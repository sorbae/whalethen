const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const webpack = require('webpack');
const passport = require('passport');
const passportSetup = require('../auth/config');
const authRoutes = require('../routes/auth-routes');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const cookieSession = require('cookie-session');
const history = require('connect-history-api-fallback');
const api = require('./placesApi.js');
const db = require('../database/');
const config = require('../webpack.config.js');
require('dotenv').config();

const app = express();
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackHotMiddleware(compiler));
}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIEKEY],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use(history());
app.use(express.static(`${__dirname}/../client/`));

app.options('/', (request, response) => response.json('GET,POST,PUT,GET,DELETE'));

app.get('/timeline/:timelineName/:timelineId', (request, response) => {
  db.getTimelineById(request.params.timelineId)
    .then(timeline => response.json(timeline))
    .tapCatch(err => console.error(err))
    .catch(() => response.status(409).end());
});

app.get('/address/:id', (request, response) => {
  db.getEventAddress(request.params.id)
    .then(result => response.send(result))
    .then(() => response.sendStatus(200));
});

app.post('/timeline', ({ body }, response) => {
  db.addNewTimeline(body.timelineId, body.numberOfDays)
    .then(() => response.sendStatus(200))
    .tapCatch(err => console.error(err))
    .catch(() => response.sendStatus(409));
});

app.post('/entry', ({ body }, response) => {
  db.addNewEvent(body.event, body.timelineId, body.day)
    .then(() => response.sendStatus(200))
    .tapCatch(err => console.error(err))
    .catch(() => response.sendStatus(409));
});

app.put('/entry', ({ body }, response) => {
  db.updateVotes(body.timelineId, body.day, body.eventId, body.votes)
    .then(() => response.sendStatus(200))
    .tapCatch(err => console.error(err))
    .catch(() => response.sendStatus(409));
});

app.delete('/entry/:timelineId/:day/:eventId', (request, response) => {
  db.removeEventFromDay(request.params.day, request.params.timelineId, request.params.eventId)
    .then(() => response.status(200).end())
    .tapCatch(err => console.error(err))
    .catch(() => response.status(409).end());
});

app.get('/search', (request, response) => {
  const { category, location } = request.query;
  // for triggering a search to the search api
  api.placesApi(location, category)
    .then((result) => {
      response.json(result);
    })
    .tapCatch(err => console.error(err))
    .catch(() => response.sendStatus(409));
});

app.get('/comments/:timelineId/:day/:eventId', (request, response) => {
  const { timelineId, day, eventId } = request.params;
  db.getComments(timelineId, day, eventId)
    .then((comments) => comments ? response.send(comments) : response.sendStatus(404))
    .catch(err => console.log('Error fetching from database', err));
});

app.post('/newComment', (request, response) => {
  const { day, timelineId, eventId, username, text } = request.body;
  db.createComment(day, timelineId, eventId, username, text)
    .then(() => response.sendStatus(201));
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
