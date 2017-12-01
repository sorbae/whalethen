import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Home from './App';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
      isLoggedIn: false,
    }
    this.checkAuth = this.checkAuth.bind(this);
  }

  componentDidMount() {
    this.checkAuth();
    // grab user's schedules
  }

  checkAuth() {
    axios.get('/auth/checkAuth')
      .then(({ data }) => {
        this.setState({ isLoggedIn: data.isLoggedIn, userInfo: data.user });
      });
  }

  render() {
    const user = this.state.userInfo;
    return (
      <div className="Profile">
        <div className="nav-links">
          <img src={user.thumbnail} alt="user-thumbnail" />
          <Link to="/home">Make a trip!</Link>
          <a href="/auth/logout">Logout</a>
        </div>
        <div>
          Hello, {user.username}!
        </div>
      </div>
    );
  }
}

// Profile.propTypes = {
//   user: propTypes.instanceOf(Object).isRequired,
// };

export default Profile;
