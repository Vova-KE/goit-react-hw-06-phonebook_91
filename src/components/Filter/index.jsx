import React from 'react';
import { nanoid } from 'nanoid';
import style from './style.module.css';

const filterId = nanoid();

const Filter = ({ value, onChange }) => {
  return (
    <label className={style.labelFilter} htmlFor={filterId}>
      Find contacts by name
      <input
        type="text"
        className={style.name}
        id={filterId}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
