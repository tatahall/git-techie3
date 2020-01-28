import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import userReducer from './userReducer';
// import setAuthToken from '../../utils/setAuthToken';
import {
    GET_USERS,
    USERS_ERROR
} from '../types';

const UserState = props => {
    const initialState={
      // token: localStorage.getItem('token'),
        users:[],
        user:{}
    };
    const[state, dispatch] = useReducer(userReducer,initialState);

    //get users
    const getUser = async () => {
      // if(localStorage.token){
      //   setAuthToken(localStorage.token);
      // }
        try {
          const res = await axios.get('https://api.github.com/users');
    
          dispatch({
            type: GET_USERS,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: USERS_ERROR,
            payload: null
          });
        }
      };
    return(
        <UserContext.Provider
    value={
      {
        token: state.token,
        users: state.users,
        getUser,
        error:state.error

      }}>
      {props.children}
    </UserContext.Provider>
    );
    
};

export default UserState;