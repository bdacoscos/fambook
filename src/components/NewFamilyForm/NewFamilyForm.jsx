import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import familiesAPI from './../../utils/familiesAPI';

class NewFamilyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleNewFam = (e) => {
    e.preventDefault();
    familiesAPI.createNewFamily(this.state)
      .then(()=> {
        this.props.history.push('/')
      })
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="col s12">
        <header>Create A New Family</header>
        <p>Start a new family!</p>
        <form onSubmit={this.handleNewFam}>
          <input
            type="text"
            placeholder="Family Name"
            onChange={(e) => this.handleChange('name', e)}
            value={this.state.name}
          />
          <button type="submit">Create Family</button>
        </form>

        <div className="newFamilyCode">
          Great, you created the {this.state.name} family!
            Give this unique code to family members so they can join your family:
            <p>5asd7897snljsdf87I'mAFakeCode0dg89</p>
          Go to <Link to="/activity">Activity Page</Link>
        </div>
      </div>
    )
  }
}

export default NewFamilyForm;