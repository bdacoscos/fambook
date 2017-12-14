import React, { Component } from 'react';
import { Link } from  'react-router-dom';

class PostFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      tags: []
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">

            <header>New Post</header>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Tell me what you're thinking."
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Post an image link!"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tags"
                />
              </div>
              <button>Submit Post</button>
            </form>


          </div>
        </div>
      </div>
    )
  }
};


export default PostFormPage;