import React from 'react';
import style from './style.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={style.listItem}>
      {contact.name}: {contact.number}
      <button
        className={style.buttonDelete}
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default ContactItem;
