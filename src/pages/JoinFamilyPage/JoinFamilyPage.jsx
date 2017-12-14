import React, { Component } from 'react';
import JoinFamilyForm from './../../components/JoinFamilyForm/JoinFamilyForm';
import NewFamilyForm from './../../components/NewFamilyForm/NewFamilyForm';

class JoinFamilyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <JoinFamilyForm
              {...this.props}
            />
          </div>
          <div className="col s6">
            <NewFamilyForm
              {...this.props}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default JoinFamilyPage;

