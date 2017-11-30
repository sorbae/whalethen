const request = require('request-promise');
const _ = require('lodash');
require('dotenv').config();

const formatCoordinates = ({ results }) => {
  const coorsObj = results[0].geometry.location;
  return `${coorsObj.lat},${coorsObj.lng}`;
};

const getCoordinates = (location) => {
  const options = {
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: { address: location },
    params: { key: process.env.MAP_API },
    json: true,
  };
  return request(options);
};

const formatPlaces = ({ results }) => {
  return _.map(results, (place) => {
    return {
      name: place.name,
      rating: place.rating,
      address: place.vicinity,
      latLong: place.geometry.location
    };
  });
};

const placesApi = (location, query, distance = 32000) => {
  const options = {
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    method: 'GET',
    qs: {
      location,
      radius: distance,
      keyword: query,
      key: process.env.MAP_API,
    },
    json: true,
  };

  return getCoordinates(location)
    .then(geocode => formatCoordinates(geocode))
    .tap((formatedCoors) => { options.qs.location = formatedCoors; })
    .then(() => request(options))
    .then(queryResults => formatPlaces(queryResults))
    .catch(err => console.error(err));
};


// EXPORTS
module.exports.placesApi = placesApi;
module.exports.getCoordinates = getCoordinates;
