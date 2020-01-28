import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';

const UserCard = props => {
  return (
    // props passed in from AllUsers.js as "user"
    <div className='CardStyle'>
      <h2>{props.user.login}</h2>
      <img src={props.user.avatar_url} alt={''} className='ImgStyle' />
      <div>
      <a href={html_url} className='btn btn btn-lg'style={{hight:'60px'}}>
                    More
                    </a>
      </div>
    </div>
  );
};

export default UserCard;