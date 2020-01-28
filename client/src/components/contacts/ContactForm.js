import React, {useState,useContext,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';


const ContactForm =() => {
    const contactContext = useContext(ContactContext);
    const {current} =contactContext;
    useEffect(()=>{
        if(current!==null){
            setContact(current);

        }else{
            setContact({
                name: '',
                email:'',
                numberofrepos:'',
                location:'',
                languages:''
                });
        }
    },[contactContext,current]);
    const [contact,setContact] = useState({
        name: '',
        email:'',
        numberofrepos:'',
        location:'',
        languages:''
    });
    const {name, email, numberofrepos, location,languages} = contact;

    const onChange = e => setContact({...contact,[e.target.name]:e.target.value});

    const onSubmit= e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
        name: '',
        email:'',
        numberofrepos:'',
        location:'',
        languages:''
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input
                type='text'
                placeholder='name'
                name='name'
                value={name}
                onChange={onChange}
            />
             <input
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
              <input
                type='text'
                placeholder='Number Of Repos'
                name='numberofrepos'
                value={numberofrepos}
                onChange={onChange}
            />
              <input
                type='text'
                placeholder='Location'
                name='location'
                value={location}
                onChange={onChange}
            />

            <input
                type='text'
                placeholder='Language'
                name='languages'
                value={languages}
                onChange={onChange}
            />
        <div>
            <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
        </div>
        </form>
    )
}

export default ContactForm