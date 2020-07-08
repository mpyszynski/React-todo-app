import React from 'react';
import FormInput from './FormInput';
import './style/form.css';
import PropTypes from 'prop-types';

export default function TodoForm(props) {
  const heading =
    props.listLength < 1 ? (
      <h1>It seems that your to do list is empty. Let's add first item!</h1>
    ) : (
      <h1>Add more items to your to do list.</h1>
    );
  return (
    <form onSubmit={props.handleSubmit} className='form__main'>
      {heading}
      <FormInput
        label='Title'
        value={props.title}
        name='title'
        placeholder='Title...'
        onChange={props.handleChange}
      />
      <FormInput
        label='Description'
        value={props.description}
        name='description'
        placeholder='Description...'
        onChange={props.handleChange}
      />
      <input type='submit' value='Add' className='form__button' />
    </form>
  );
}

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  listLength: PropTypes.number.isRequired,
};
