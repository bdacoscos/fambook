import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostCards from './../../components/PostCards/PostCards';
import PostForm from './../../components/PostForm/PostForm';
import familiesAPI from '../../utils/familiesAPI';


class ActivityPage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    familiesAPI.index().then(users =>
      this.setState({ users })
    ).catch(err => {
      // refactor to redirect to login page
      // this.props.history.push('/login');
      console.log('bad token, should redirect');
    });
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col s12">
            <h1>Family Feed</h1>
            <p>What are you up to?</p>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <PostForm />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <PostCards />
          </div>
        </div>

      </div>
    );
  }
}

export default ActivityPage;