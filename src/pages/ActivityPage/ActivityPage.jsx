import React, { Component } from 'react';
import PostCard from './../../components/PostCard/PostCard';
import PostForm from './../../components/PostForm/PostForm';
import familiesAPI from '../../utils/familiesAPI';


class ActivityPage extends Component {
  constructor(props) {
    super(props);
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
            <PostForm
              user={this.props.user}
              family={this.props.family}
              post={this.props.post}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <PostCard />
          </div>
        </div>

      </div>
    );
  }
}

export default ActivityPage;