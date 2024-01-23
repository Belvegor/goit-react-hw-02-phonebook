import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './form.module.css';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div className={styles.div}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
};

export default App;