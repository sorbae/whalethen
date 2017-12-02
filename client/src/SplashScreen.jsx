import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import Home from './App';

class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: null,
      route: (<Route exact path="/" component={Home} />),
    };
    this.checkAuth = this.checkAuth.bind(this);
  }

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth() {
    axios.get('/auth/checkAuth')
      .then(({ data }) => {
        this.setState({ isLoggedIn: data.isLoggedIn, userInfo: data.user }, () => {
          if (data.isLoggedIn) {
            this.setState({
              route: (<Route exact path="/" render={() => (<Profile user={this.state.userInfo} />)} />),
            });
          }
        });
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          {this.state.route}
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    )
  }
}

export default SplashScreen;
