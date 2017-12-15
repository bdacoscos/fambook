import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import familiesAPI from './../../utils/familiesAPI';

class JoinFamilyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyCode: ''
    };
  }

  handleFamCheck = (e) => {
    e.preventDefault();
    familiesAPI.checkFamilyCode(this.state)
      .then((family)=> {
        this.props.history.push('/activity')
      })
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12  medium-margins">
            <header className="arvo-font bigger-font">Join A Family</header>
              <p>Enter your family code below:</p>
              <form onSubmit={this.handleFamCheck}>
                <input
                  type="text"
                  placeholder="Family Code"
                  onChange={(e) => this.handleChange('familyCode', e)}
                />
              <button className="waves-effect waves-light btn red lighten-1">Join Family</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinFamilyForm;