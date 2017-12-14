import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
    // check if submitted code (id) exists in Family collection
      // (GET req to search db)
    // redirect to /activity
    familiesAPI.checkFamilyCode(this.state)
      .then((data)=> {
        // below is the query object: ALL FAMILIES
        console.log(data);
        console.log(this.state);
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