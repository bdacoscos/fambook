import React, { Component } from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import WelcomePage from './../WelcomePage/WelcomePage';
import LoginPage from './../LoginPage/LoginPage';
import SignupPage from './../SignupPage/SignupPage';
import JoinFamilyPage from './../JoinFamilyPage/JoinFamilyPage';
import ActivityPage from './../ActivityPage/ActivityPage';
import CalendarPage from './../CalendarPage/CalendarPage';
import MessagesPage from './../MessagesPage/MessagesPage';
import Navbar from '../../components/Navbar/Navbar';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

/*---------- Event Handlers ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  }

  handleJoin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

/*----------  Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="container">
        <Navbar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage />
            }/>
            <Route exact path='/login' render={(props) =>
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/join' render={(props) =>
              <JoinFamilyPage
                {...props}
                handleJoin={this.handleJoin}
              />
            }/>
            <Route exact path='/activity' render={() => (
              userService.getUser() ?
                <ActivityPage users={this.state.users}/>
                :
                <Redirect to='/login' />
              )} />
            <Route exact path='/calendar' render={() =>
              <CalendarPage />
            }/>
            <Route exact path='/messages' render={() =>
              <MessagesPage />
            }/>
          </Switch>
      </div>
    );
  }
}

export default App;