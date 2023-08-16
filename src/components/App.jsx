import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/selectors';
import { setContacts } from 'redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  // componentDidMount
  useEffect(() => {
    const contactsJSON = localStorage.getItem('contacts');

    if (contactsJSON) {
      dispatch(setContacts(JSON.parse(contactsJSON)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //componentDidUpdate dla contacts
  const contacts = useSelector(getAllContacts);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        marginLeft: '45px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
