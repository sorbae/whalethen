const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const webpack = require('webpack');
const passport = require('passport');
const passportSetup = require('../auth/config');
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

app.use(history());
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/`));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIEKEY],
}));
app.use(passport.initialize());
app.use(passport.session());

app.options('/', (request, response) => response.json('GET,POST,PUT,GET,DELETE'));

app.get('/timeline/:timelineName/:timelineId', (request, response) => {
  db.getTimelineById(request.params.timelineId)
    .then(timeline => response.json(timeline))
    .tapCatch(err => console.error(err))
    .catch(() => response.status(409).end());
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

app.get('/signin', passport.authenticate('google', {
  scope: ['profile'],
}));

app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/checkAuth', (req, res) => {
  if (req.user) {
    res.send({ isLoggedIn: true, user: req.user });
  } else {
    res.send({ isLoggedIn: false });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
