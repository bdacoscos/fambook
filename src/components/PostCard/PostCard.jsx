import React from 'react';


const PostCard = (props) => {
  // console.log('postcard > props =', props)

  var card = props.post ?
    <div className="">

        <div class="col s6">
          <div class="card light-blue lighten-5">
            <div class="card-content black-text">
              <span class="card-title">Card Title</span>
              <p>{props.post.content}</p>
            </div>
          </div>
        </div>
    </div>
    :
    <div></div>;

  return (
    <div>
     {card}
    </div>
  )
};

export default PostCard;