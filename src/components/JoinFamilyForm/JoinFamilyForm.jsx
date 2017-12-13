import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JoinFamilyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
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
    this.props.history.push('/activity')
    console.log('name is now= ', this.state.name);
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col s6">
            <header>Join A Family</header>
              <p>Place your unique family code below:</p>
              <form>
                <input type="text" placeholder="Family Code"/>
              </form>
              <button>Join Family</button>
          </div>

          <div className="col s6">
            <header>Create A Family</header>
              <p>If you don't have a family to join, create one here.</p>
              <form onSubmit={this.handleNewFamilySubmit}>
                <input
                  type="text"
                  placeholder="Family Name"
                  value={this.state.name}
                  onChange={(e) => this.handleChange('name', e)}
                />
                <button>Create Family</button>
              </form>
          </div>

        </div>
      </div>
    )
  }
}

export default JoinFamilyForm;