import React, { Component } from 'react';
import JoinFamilyForm from './../../components/JoinFamilyForm/JoinFamilyForm';

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
      <div>
        <JoinFamilyForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleJoin={this.props.handleJoin}
        />
        <p>{this.state.message}</p>
      </div>
    )
  }
};

export default JoinFamilyPage;