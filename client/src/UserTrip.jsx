import React from 'react';
import propTypes from 'prop-types';

const UserTrip = ({ trip }) => (
  <div className="container user-trip">
    {trip}
  </div>
);

UserTrip.propTypes = {
};


export default UserTrip;
