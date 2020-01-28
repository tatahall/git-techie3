import React from 'react';
// import './AllUsers.css';
import UserItem from '../users/UserItem'


const AllUsers = props => {
  return (
    <div>
      {props.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AllUsers;