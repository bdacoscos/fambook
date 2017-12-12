import React from 'react';

const ActivityPage = (props) => {
  return (
    <div>
      {
        props.users ?
          props.users.map((user, idx) => <p key={idx}>{user.firstName}</p>)
          :
          <h1>Loading...</h1>
      }
    </div>
  )
}

export default ActivityPage;