import React,{useContext} from 'react';
import UserContext from '../../context/users/userContext';
const UserItem=({user:{login,avatar_url,html_url}})=>{
    const userContext =useContext(UserContext);
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
                <h3>{login}</h3>
                <div>
                <a href={html_url} className='btn btn btn-lg'style={{hight:'60px'}}>
                    More
                    </a>
                </div>
            </div>
        );
};


export default UserItem;