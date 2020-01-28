import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    USERS_ERROR,
    GET_USERS
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading:false,
                user:action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case USER_LOADED:
        case GET_USERS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAutheticated:true,
                loading:false
            };
            case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT:
            case USERS_ERROR:
                localStorage.removeItem('token');
                return{
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error: action.payload
                };
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }
      default:
        return state;
    }
  };