import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({contact}) => {

    const contactContext =useContext(ContactContext);
    const {deleteContact,clearCurrent} =contactContext;
    const {_id, name, email,numberofrepos, location,languages} = contact;

    const onDelete=()=>{
      deleteContact(_id);
      clearCurrent();
    };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
      </h3>
      <ul className='list'>
        {email && (
          <li>
             {email}
          </li>
        )}
        {numberofrepos && (
          <li>
             {numberofrepos}
          </li>
        )}
        {location && (
          <li>
           {location}
          </li>
        )}
         {languages && (
          <li>
           {languages}
          </li>
        )}
      </ul>
      <p>
        {/* <button
          className='btn btn-dark btn-sm' onClick={()=>setCurrent(contact)}
        >
          Edit
        </button> */}
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.prototypes={
  contact: PropTypes.object.isRequired
}
export default ContactItem;