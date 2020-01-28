import {
    GET_CONTACTS,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTACT_ERROR,
   
  } from '../types';

  export default (state, action) =>{
      switch(action.type){
        case GET_CONTACTS:
                return {
                  ...state,
                  contacts: action.payload,
                  loading: false
                };
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[...state.contacts,action.payload]
            };
            case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(contact =>contact._id !==action.payload)
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
                return{
                    ...state,
                    current: null
                };
        case CONTACT_ERROR:
            return {
                ...state,
                error:action.payload
            };
            default:
                return state;
      }
  }