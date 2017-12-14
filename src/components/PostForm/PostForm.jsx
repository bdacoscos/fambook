import React, { Component } from 'react';
import { Link } from  'react-router-dom';
import postsAPI from './../../utils/postsAPI';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // postsAPI.createNewPost(this.state);
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">

            <header>New Post</header>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Tell me what you're thinking."
                  value={this.state.content}
                  onChange={(e) => this.handleChange('content', e)}
                />
              </div>
              <button type="submit">Submit Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};


export default PostForm;