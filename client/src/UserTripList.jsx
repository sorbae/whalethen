import React from 'react';
import propTypes from 'prop-types';
import UserTrip from './UserTrip';

// {user.trips.map((trip => <UserTrip trip={trip} />)}
const UserTripList = ({ user }) => (
  <div className="container user-trips">
    <h3>Your Trips</h3>
  </div>
);

UserTripList.propTypes = {
};


export default UserTripList;
