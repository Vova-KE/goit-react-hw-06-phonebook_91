import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import style from './style.module.css';

const initialContacts = () => {
  const existingContacts = localStorage.getItem('contacts');
  return existingContacts ? JSON.parse(existingContacts) : [];
};

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = contact => {
    const contactAdd = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    const normalizedContactName = contactAdd.name.toLowerCase();
    const isExist = contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedContactName)
    );
    if (isExist) {
      alert(`${contactAdd.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...contacts, contactAdd]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmitForm={formSubmitHandler} />
      <h2 className={style.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
