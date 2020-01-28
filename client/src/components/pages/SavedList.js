import React from 'react';
import Contacts from '../contacts/Contacts';
// import ContactForm from '../contacts/ContactForm';
// import ContactFilter from '../contacts/ContactFilter';

const SavedList = () => {
  return (
    <div className='grid-4'>
      <div>
        {/* <ContactForm /> */}
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default SavedList;