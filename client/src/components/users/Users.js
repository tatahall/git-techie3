import React, {Fragment, useContext,useEffect} from 'react';
import UserContext from '../../context/users/userContext';
import UserItem from './UserItem';

const Users = ()=>{
    const userContext =useContext(UserContext);
    const {users,getUser} =userContext;

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
      }, []);

    return (
        <Fragment>
            {users.map(user=>(
                <UserItem key={user.id} user={user}/>
            ))}
        </Fragment>
    );
}

export default Users;