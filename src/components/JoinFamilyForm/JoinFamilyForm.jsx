import React, { Component } from 'react';
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
    console.log(this.state);
    familiesAPI.checkFamilyCode(this.state)
      .then((family)=> {
        console.log(family);
        // this.state.history.push('/activity')
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
          <div className="col s12">
            <header>Join An Existing Family</header>
              <p>Enter your family code below:</p>
              <form onSubmit={this.handleFamCheck}>
                <input
                  type="text"
                  placeholder="Family Code"
                  onChange={(e) => this.handleChange('familyCode', e)}
                />
                <button>Join Family</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinFamilyForm;