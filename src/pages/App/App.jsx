import React, { Component } from 'react';
import WelcomePage from './../WelcomePage/WelcomePage';
import ActivityPage from './../ActivityPage/ActivityPage';
import CalendarPage from './../CalendarPage/CalendarPage';
import MessagesPage from './../MessagesPage/MessagesPage';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WelcomePage />
        <ActivityPage />
        <CalendarPage />
        <MessagesPage />
      </div>
    )
  }
}

export default App;