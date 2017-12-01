import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Home from './App';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // grab user's schedules
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Link to="/home">Make a trip!</Link>
        <a href="/auth/logout">Logout</a>
        <img src={user.thumbnail} alt="user-thumbnail" />
        {user.username}
      </div>
    );
  }
}

Profile.propTypes = {
  user: propTypes.instanceOf(Object).isRequired,
};

export default Profile;