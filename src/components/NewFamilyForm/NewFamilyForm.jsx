import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewFamilyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  createNewFamily = () => {
    var url = '/api/families/join';
    var data = {
      name: this.familyName.value
    };
    var request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
    console.log(request)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        return json();
      });
    console.log('still inside createNewFam, but outside of Fetch');
  }

  handleChange = (field, e) => {
    // this.props.updateMessage('');
    this.setState({
      [field]: e.target.value
    });
  }

  // handleNewFamilySubmit
  handleNewFamilySubmit = (e) => {
    e.preventDefault();
    this.props.handleJoin();
    // display the newFamilyCode div
    console.log('name is now= ', this.state.name);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="col s12">
        <header>Create A New Family</header>
        <p>Start a new family!</p>
        <form onSubmit={this.createNewFamily}>
          <input
            type="text"
            placeholder="Family Name"
            ref={input => this.familyName = input}
          />
          <button>Create Family</button>
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