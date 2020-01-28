import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  SET_CURRENT
 
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [],
    current:null,
    error:null
    
  };
   const [state, dispatch] = useReducer(contactReducer, initialState);

   const getContacts = async () => {
    try {
      const res = await axios.get('/api/profiles');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

   //Add Contact
   const addContact =async contact =>{
     const config ={
       headers:{
         'Content-Type': 'application/json'
       }
     }
     try {
       const res =await axios.post('/api/profiles',contact,config);
       dispatch({type: ADD_CONTACT, payload:res.data});
     } catch(err){
       dispatch({type:CONTACT_ERROR, payload: err.response.msg})
     }
   };

   
   //Delete contact
   const deleteContact = async id => {
    try {
      await axios.delete(`/api/profiles/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };
   //Set Current Contact
   const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
   //Clear Current Contact
   const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

   //Update Contact
   const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/profiles/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

   //Filter Contacts
   //Clear Filter

  return (
    <ContactContext.Provider
    value={
      {
        contacts: state.contacts,
        current: state.current,
        addContact,
        clearCurrent,
        setCurrent,
        updateContact,
        deleteContact,
        getContacts,
        error:state.error

      }}>
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;