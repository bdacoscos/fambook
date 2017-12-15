import React from 'react';


const PostCard = (props) => {

  var card = props.post ?
    <div classNameName="">

        <div className="col s6">
          <div className="card white">
            <div className="card-content black-text">
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