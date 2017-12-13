import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JoinFamilyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  checkFamilyCode = (e) => {
    // check if submitted code (id) exists in Family collection
    // redirect to /activity
    this.props.history.push('/activity')
  }


  handleChange = (field, e) => {
    // this.props.updateMessage('');
    this.setState({
      [field]: e.target.value
    });
  }

  componentDidMount() {
    // this.checkFamilyCode();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <header>Join An Existing Family</header>
              <p>Enter your family code below:</p>
              <form onSubmit={this.checkFamilyCode}>
                <input type="text" placeholder="Family Code"/>
                <button>Join Family</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinFamilyForm;