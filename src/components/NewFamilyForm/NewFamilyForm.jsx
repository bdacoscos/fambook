import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import familiesAPI from './../../utils/familiesAPI';

class NewFamilyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      familyCode: ''
    };
  }

  handleNewFam = (e) => {
    e.preventDefault();
    familiesAPI.createNewFamily(this.state)
      .then((family)=> {
        this.setState({
          familyCode: family.familyCode
        })
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

        {this.state.familyCode === '' ?
          <div></div>
          :
          <div className="newFamilyCode">
            Great, you created the {this.state.name} family!
            Give this unique code to family members so they can join your family:
            <p>{this.state.familyCode}</p>
            Go to <Link to="/activity">Activity Page</Link>
          </div>
        }

      </div>
    )
  }
}

export default NewFamilyForm;