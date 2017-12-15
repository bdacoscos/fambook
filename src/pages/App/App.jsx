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
import Navbar from '../../components/Navbar/Navbar';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      family: null,
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

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

/*----------  Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    let findFamily = fetch('/api/families').then(res => res.json());
    let allPosts = fetch('/api/posts').then(res => res.json());
    Promise.all([user, findFamily, allPosts]).then((data) => {
      console.log(data);
      this.setState({user: data[0], family: data[1], post: data[2]});
    })
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
              <WelcomePage
                user={this.state.user}
                family={this.state.family}
              />
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
              />
            }/>
            <Route exact path='/activity' render={() => (
              userService.getUser() ?
                <ActivityPage
                  user={this.state.user}
                  family={this.state.family}
                  post={this.state.post}
                />
                :
                <Redirect to='/login' />
              )}
            />
          </Switch>
      </div>
    );
  }
}

export default App;