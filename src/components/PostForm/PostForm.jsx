import React, { Component } from 'react';
import postsAPI from './../../utils/postsAPI';
import PostCard from './../PostCard/PostCard';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  handleNewPost = (e) => {
    var user = this.props.user._id;
    var content = this.state.content;
    postsAPI.createNewPost(content, user)
      .then((post) => {
      })
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    var posts = this.props.post;
    var allPosts = this.props.post ?
      posts.map(card => {
        return <PostCard post={card} key={card._id} />
      })
      :
      <div>Loading...</div>

    return (
      <div className="row">
        <div className="col s12 margin-bottom">

          <form onSubmit={this.handleNewPost}>
            <div>
              <input
                type="text"
                placeholder="Post something!"
                value={this.state.content}
                onChange={(e) => this.handleChange('content', e)}
              />
            </div>
            <button className="waves-effect waves-light btn cyan accent-4" type="submit">Submit Post</button>
          </form>
        </div>

        {allPosts}

      </div>
    )
  }
};


export default PostForm;