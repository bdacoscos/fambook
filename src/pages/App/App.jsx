import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import WelcomePage from './../WelcomePage/WelcomePage';
import LoginPage from './../LoginPage/LoginPage';
import ActivityPage from './../ActivityPage/ActivityPage';
import CalendarPage from './../CalendarPage/CalendarPage';
import MessagesPage from './../MessagesPage/MessagesPage';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: null
    }
  }

  componentDidMount() {
    fetch('/api/activity')
      .then(jsonData => jsonData.json())
      .then(users => this.setState({ users: users }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage />
            }/>
            <Route exact path='/login' render={() =>
              <LoginPage />
            }/>
            <Route exact path='/signup' render={() =>
              <SignupPage />
            }/>
            <Route exact path='/activity' render={() =>
              <ActivityPage users={this.state.users}/>
            }/>
            <Route exact path='/calendar' render={() =>
              <CalendarPage />
            }/>
            <Route exact path='/messages' render={() =>
              <MessagesPage />
            }/>
          </Switch>
      </div>
    )
  }
}

export default App;