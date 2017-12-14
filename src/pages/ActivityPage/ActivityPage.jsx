import React, { Component } from 'react';
import PostCard from './../../components/PostCard/PostCard';
import familiesAPI from '../../utils/familiesAPI';


class ActivityPage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // make fetch call for all the users of a family
    // then set state with data from api call
    // remember: this.setState({})...
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
            <button>Make a post!</button>
          </div>
          <div className="row">
            <PostCard />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityPage;