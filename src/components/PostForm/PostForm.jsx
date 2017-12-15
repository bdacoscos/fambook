import React, { Component } from 'react';
import postsAPI from './../../utils/postsAPI';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  handleNewPost = (e) => {
    e.preventDefault();
    var user = this.props.user;
    // this.props.family[0].posts.push(this.state.content);
    postsAPI.createNewPost(this.state, user)
      .then((post) => {
        console.log(post);
      })
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">

          <form onSubmit={this.handleNewPost}>
            <div>
              <input
                type="text"
                placeholder="Post something!"
                value={this.state.content}
                onChange={(e) => this.handleChange('content', e)}
              />
            </div>
            <button type="submit">Submit Post</button>
          </form>
        </div>
      </div>
    )
  }
};


export default PostForm;