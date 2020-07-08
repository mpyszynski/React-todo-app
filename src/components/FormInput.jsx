import React from 'react';
import './style/form.css';
import PropTypes from 'prop-types';

export default function FormInput({
  label,
  value,
  name,
  placeholder,
  onChange,
}) {
  return (
    <section className='form__section'>
      <label>{label}</label>
      <input
        type='text'
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className='form__input'
        required
        minLength={3}
      />
    </section>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
