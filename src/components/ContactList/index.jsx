import React from 'react';
import ContactItem from '../ContactItem';
import style from './style.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
