import React, { Component } from 'react';
import JoinFamilyForm from './../../components/JoinFamilyForm/JoinFamilyForm';
import NewFamilyForm from './../../components/NewFamilyForm/NewFamilyForm';

class JoinFamilyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <JoinFamilyForm
              {...this.props}
              updateMessage={this.updateMessage}
              handleJoin={this.props.handleJoin}
            />
          </div>
          <div className="col s6">
            <NewFamilyForm />
          </div>
        </div>
        <p>{this.state.message}</p>
      </div>
    )
  }
};

export default JoinFamilyPage;

